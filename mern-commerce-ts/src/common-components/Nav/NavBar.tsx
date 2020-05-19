import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap-reboot.css";
import "font-awesome/css/font-awesome.min.css";
import "./NavBar.css";
import "../../assets/custom-icon/css/fontello.css";
import MiniCart from "../cart/mini-cart";
export interface IProps {}
interface IState {
  showCart: boolean;
}
class NavBar extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      showCart: false,
    };
  }
  toggleCart() {
    var show = !this.state.showCart;
    console.log(show);
    this.setState({ ...this.state, showCart: show });
  }
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
                      <i className="fa fa-sign-in"></i>
                    </span>
                  </div>
                  <div className="htc__shopping__cart">
                    <span>
                      <i
                        className="fa fa-shopping-bag"
                        onClick={this.toggleCart.bind(this)}
                      ></i>
                    </span>
                    <span className="htc__qua">2</span>

                    <div
                      className={
                        this.state.showCart
                          ? "cart-menu show-cart"
                          : "cart-menu"
                      }
                    >
                      <MiniCart></MiniCart>
                    </div>
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
