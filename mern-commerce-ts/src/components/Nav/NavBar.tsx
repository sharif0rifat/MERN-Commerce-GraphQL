import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './NavBar.css'

class NavBar extends React.Component {
    render() {
      return <header>
                <div  className="mainmenu__wrap sticky__header">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-5"><div className="logo">Logo</div></div>
                                <div className="col-md-7 col-lg-8 col-sm-5 col-xs-3">
                                    <nav className="main__menu__nav hidden-xs hidden-sm">
                                        <ul className="main__menu">
                                            <li className="drop"><span className="menu-link">HOME</span> </li>
                                            <li className="drop"><span className="menu-link">WOMEN</span> </li>
                                            <li className="drop"><span className="menu-link">MEN</span> </li>
                                            <li className="drop"><span className="menu-link">PRODUCT</span> </li>
                                            <li className="drop"><span className="menu-link">BLOG</span> </li>
                                            <li className="drop"><span className="menu-link">PAGES</span> </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="col-md-3 col-lg-2 col-sm-4 col-xs-4">User</div>
                            </div>
                        </div>
                    </div>
            </header>
      ;
    }
  }
  export default NavBar;