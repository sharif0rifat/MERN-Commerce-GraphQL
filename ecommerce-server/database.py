from collections import defaultdict
from io import StringIO
from typing import Dict, List, Optional, DefaultDict
import sys


class SymbolTable:
    """ Symbol Table for tracking nested transactions. """

    def __init__(self) -> None:
        self.__entries: Dict[str, int] = {}
        self.__counters: DefaultDict[int, int] = defaultdict(int)

    @property
    def entries(self) -> Dict[str, int]:
        return self.__entries

    @property
    def counters(self) -> DefaultDict[int, int]:
        return self.__counters


class Database:
    """ In-memory database storing integers. """

    def __init__(self, output: Optional[StringIO] = None) -> None:
        """ We offer the ability to print to the buffer `output` for testing, but otherwise write to stdout. """
        self._ended = False
        self._output = output or sys.stdout
        self._level = 0
        self._stack: List[SymbolTable] = [SymbolTable()]

    def ended(self) -> bool:
        return self._ended

    def handle_set(self, name: str, value: int) -> None:
        if name in self._stack[self._level].entries:
            self._stack[self._level].counters[self._stack[self._level].entries[name]] -= 1
        self._stack[self._level].entries[name] = value
        self._stack[self._level].counters[value] += 1

    def handle_get(self, name: str) -> None:
        if name in self._stack[self._level].entries:
            print(self._stack[self._level].entries[name], file=self._output)
        else:
            print('NULL', file=self._output)

    def handle_unset(self, name: str) -> None:
        if name in self._stack[self._level].entries:
            self._stack[self._level].counters[self._stack[self._level].entries[name]] -= 1
            del self._stack[self._level].entries[name]

    def handle_numwithvalue(self, value: int) -> None:
        print(self._stack[self._level].counters[value])

    def handle_begin(self) -> None:
        """ start transaction by pushing new symbol table in stack. """
        symbol_table: SymbolTable = SymbolTable()
        for key, value in self._stack[self._level].counters.items():
            symbol_table.counters[key] = value
        for k, v in self._stack[self._level].entries.items():
            symbol_table.entries[k] = v
        self._stack.append(symbol_table)
        self._level += 1

    def handle_rollback(self) -> None:
        """ rollback by popping the top-most symbol table from stack. """
        if self._level > 0:
            self._stack.pop()
            self._level -= 1
        else:
            print('NO TRANSACTION', file=self._output)

    def handle_commit(self) -> None:
        """ commit all opened transaction. pop every symbol table pushed for transactions and propagates
        the state to the symbol table just one level below the current one. """

        if self._level == 0:
            print('NO TRANSACTION', file=self._output)
        else:
            while self._level > 0:
                symbol_table: SymbolTable = self._stack.pop()
                self._level -= 1
                self._stack[self._level].entries.clear()
                self._stack[self._level].counters.clear()
                for key, value in symbol_table.entries.items():
                    self._stack[self._level].entries[key] = value
                for k, v in symbol_table.counters.items():
                    self._stack[self._level].counters[k] = v

    def handle_end(self) -> None:
        self._ended = True


def validate_args(parts: List[str], expected_len: int) -> None:
    assert len(parts) == expected_len, f'Invalid command: {parts}'


def process_line(db: Database, line: str) -> None:
    """ Processes a single line and calls the appropriate Database method. """
    if len(line) == 0:
        return
    assert not db.ended(), 'Already hit end but received command: {line}'
    parts = line.split(' ')
    operation = parts[0]
    # Switch on operation:
    if operation == 'SET':
        validate_args(parts, 3)
        db.handle_set(parts[1], int(parts[2]))
    elif operation == 'GET':
        validate_args(parts, 2)
        db.handle_get(parts[1])
    elif operation == 'UNSET':
        validate_args(parts, 2)
        db.handle_unset(parts[1])
    elif operation == 'NUMWITHVALUE':
        validate_args(parts, 2)
        db.handle_numwithvalue(int(parts[1]))
    elif operation == 'BEGIN':
        validate_args(parts, 1)
        db.handle_begin()
    elif operation == 'ROLLBACK':
        validate_args(parts, 1)
        db.handle_rollback()
    elif operation == 'COMMIT':
        validate_args(parts, 1)
        db.handle_commit()
    elif operation == 'END':
        validate_args(parts, 1)
        db.handle_end()
    else:
        raise Exception(f'Unrecognized command: {line}')


def main() -> None:
    """ Processes all the lines of stdin and prints results to stdout. """
    db = Database()
    for line in sys.stdin:
        process_line(db, line.strip())
    assert db.ended(), 'Did not receive END command'


if __name__ == '__main__':
    main()
