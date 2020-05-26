import React, { Component } from "react";
import "./cart-detail.css";
import p2 from "../../assets/css/images/product-2/sm-smg/2.jpg";

interface Props {}
interface State {}

export default class CartDetail extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="container">
        <div className="row table-content">
          <table className="table table-bordered ">
            <thead>
              <tr>
                <th scope="col">products</th>
                <th scope="col">name of products</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="product-thumbnail">
                  <a href="#">
                    <img src={p2} alt="product img" />
                  </a>
                </td>
                <td className="product-name">
                  <a href="#">New Dress For Sunday</a>
                  <ul className="pro__prize">
                    <li className="old__prize">$82.5</li>
                    <li>$75.2</li>
                  </ul>
                </td>
                <td className="product-price">
                  <span className="amount">£165.00</span>
                </td>
                <td className="product-quantity">
                  <input type="number" min="1" />
                </td>
                <td className="product-subtotal">£165.00</td>
                <td className="product-remove">
                  <a href="#">
                    <i className="fa fa-trash"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="product-thumbnail">
                  <a href="#">
                    <img src={p2} alt="product img" />
                  </a>
                </td>
                <td className="product-name">
                  <a href="#">New Dress For Sunday</a>
                  <ul className="pro__prize">
                    <li className="old__prize">$82.5</li>
                    <li>$75.2</li>
                  </ul>
                </td>
                <td className="product-price">
                  <span className="amount">£165.00</span>
                </td>
                <td className="product-quantity">
                  <input type="number" />
                </td>
                <td className="product-subtotal">£165.00</td>
                <td className="product-remove">
                  <a href="#">
                    <i className="fa fa-trash"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <div className="htc__cart__total">
              <h6>cart total</h6>
              <div className="cart__desk__list">
                <ul className="cart__desc">
                  <li>cart total</li>
                  <li>tax</li>
                  <li>shipping</li>
                </ul>
                <ul className="cart__price">
                  <li>$909.00</li>
                  <li>$9.00</li>
                  <li>0</li>
                </ul>
              </div>
              <div className="cart__total">
                <span>order total</span>
                <span>$918.00</span>
              </div>
              <ul className="payment__btn">
                <li className="active">
                  <a href="#">payment</a>
                </li>
                <li>
                  <a href="#">continue shopping</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
