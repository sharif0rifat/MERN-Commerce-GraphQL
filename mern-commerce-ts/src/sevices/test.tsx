export default class TestService {
  //   static GetTestResult() {
  //     throw new Error("Method not implemented.");
  //   }

  public GetTestResult() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
}
