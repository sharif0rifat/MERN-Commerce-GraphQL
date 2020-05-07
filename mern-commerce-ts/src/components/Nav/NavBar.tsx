import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap-reboot.css";
import "font-awesome/css/font-awesome.min.css";
import "./NavBar.css";
import "../../assets/custom-icon/css/fontello.css";

class NavBar extends React.Component {
  render() {
    return (
      <header>
        <div className="mainmenu__wrap sticky__header">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">
                <div className="logo">
                  <img src="/img/mern-logo.png" alt="logo" />
                </div>
              </div>
              <div className="col-md-7 col-lg-8 col-sm-5 col-xs-3">
                <nav className="main__menu__nav d-none d-md-block">
                  <ul className="main__menu">
                    <li className="drop">
                      <span className="menu-link"> HOME</span>{" "}
                    </li>
                    <li className="drop">
                      <span className="menu-link">WOMEN</span>{" "}
                    </li>
                    <li className="drop">
                      <span className="menu-link">MEN</span>{" "}
                    </li>
                    <li className="drop">
                      <span className="menu-link">PRODUCT</span>{" "}
                    </li>
                    <li className="drop">
                      <span className="menu-link">BLOG</span>{" "}
                    </li>
                    <li className="drop">
                      <span className="menu-link">PAGES</span>{" "}
                    </li>
                  </ul>
                </nav>
                <div className="mobile-menu clearfix d-block d-md-none">
                  <nav id="mobile_dropdown">
                    <ul>
                      <li>
                        <span>Home</span>
                      </li>
                      <li>
                        <span>blog</span>
                      </li>
                      <li>
                        <span>pages</span>
                        <ul>
                          <li>
                            <span>Blog</span>
                          </li>
                          <li>
                            <span>Blog Details</span>
                          </li>
                          <li>
                            <span>Cart page</span>
                          </li>
                          <li>
                            <span>checkout</span>
                          </li>
                          <li>
                            <span>contact</span>
                          </li>
                          <li>
                            <span>product grid</span>
                          </li>
                          <li>
                            <span>product details</span>
                          </li>
                          <li>
                            <span>wishlist</span>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>contact</span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-md-3 col-lg-2 col-sm-4 col-xs-4">
                <div className="header__right">
                  <div className="header__search search search__open">
                    <span>
                      <i className="fa fa-search"></i>
                    </span>
                  </div>
                  <div className="header__account">
                    <span>
                      <a href="/signin">
                        <i className="fa fa-sign-in"></i>
                      </a>
                    </span>
                  </div>
                  <div className="htc__shopping__cart">
                    <span>
                      <i className="fa fa-shopping-bag"></i>
                    </span>
                    <span className="htc__qua">2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default NavBar;
