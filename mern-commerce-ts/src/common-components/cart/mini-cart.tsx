import React, { Component } from "react";
import "./mini-cart.css";
import p1 from "../../assets/css/images/product-2/sm-smg/1.jpg";
import p2 from "../../assets/css/images/product-2/sm-smg/2.jpg";
interface Props {}
interface State {}

export default class MiniCart extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="shopping__cart">
        <div className="shopping__cart__inner">
          <div className="shp__cart__wrap">
            <div className="shp__single__product">
              <div className="shp__pro__thumb">
                <a href="#">
                  <img
                    // src="images/product-2/sm-smg/1.jpg"
                    src={p1}
                    alt="product images"
                  />
                </a>
              </div>
              <div className="shp__pro__details">
                <h2>
                  <a href="product-details.html">
                    BO&amp;Play Wireless Speaker
                  </a>
                </h2>
                <span className="quantity">QTY: 1</span>
                <span className="shp__price">$105.00</span>
              </div>
              <div className="remove__btn">
                <a href="#" title="Remove this item">
                  <i className="fa fa-close"></i>
                </a>
              </div>
            </div>
            <div className="shp__single__product">
              <div className="shp__pro__thumb">
                <a href="#">
                  <img src={p2} alt="product images" />
                </a>
              </div>
              <div className="shp__pro__details">
                <h2>
                  <a href="product-details.html">Brone Candle</a>
                </h2>
                <span className="quantity">QTY: 1</span>
                <span className="shp__price">$25.00</span>
              </div>
              <div className="remove__btn">
                <a href="#" title="Remove this item">
                  <i className="fa fa-close"></i>
                </a>
              </div>
            </div>
          </div>
          <ul className="shoping__total">
            <li className="subtotal">Subtotal:</li>
            <li className="total__price">$130.00</li>
          </ul>
          <ul className="shopping__btn">
            <li>
              <a href="#">View Cart</a>
            </li>
            <li className="shp__checkout">
              <a href="#">Checkout</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
