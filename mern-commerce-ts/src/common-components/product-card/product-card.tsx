import * as React from "react";
import TestService from "../../sevices/test";
import "./product-card.css";
import prod from "../../assets/css/images/product/1.jpg";
import NewArrival from "../../misc-component/new-arrival/new-arrival";
export interface IHomeProps {}

export default class ProductCard extends React.Component<IHomeProps> {
  test: TestService = new TestService();
  componentDidMount() {
    this.test.GetTestResult();
  }
  public render() {
    return (
      <div>
        <div className="category">
          <div className="ht__cat__thumb">
            <a href="product-details.html">
              <img src={prod} alt="product images" />
            </a>
          </div>
          <div className="fr__hover__info">
            <ul className="product__action">
              <li>
                <a href="wishlist.html">
                  <i className="fa fa-shopping-bag"></i>
                </a>
              </li>

              <li>
                <a href="cart.html">
                  <i className="fa fa-heart"></i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fa fa-random"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="fr__product__inner">
            <h4>
              <a href="product-details.html">Largest Water Pot</a>
            </h4>
            <ul className="fr__pro__prize">
              <li className="old__prize">$30.3</li>
              <li>$25.9</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
