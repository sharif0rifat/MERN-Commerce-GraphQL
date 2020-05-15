import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import "./product-detail.css";
interface ProductPrm {
  id: string;
  name: string;
}
interface State {}

export default class ProductDetail extends Component<
  RouteComponentProps<ProductPrm>,
  State
> {
  state = {};
  //   props = {};

  render() {
    return (
      // <div>
      //   Product Detail{this.props.match.params.id}{" "}
      //   {this.props.match.params.name}
      // </div>
      <div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="bradcaump__inner">
                  <nav className="bradcaump-inner">
                    <a className="breadcrumb-item" href="index.html">
                      Home
                    </a>
                    <span className="brd-separetor">
                      <i className="fa fa-chevron-right"></i>
                    </span>
                    <a className="breadcrumb-item" href="product-grid.html">
                      Products
                    </a>
                    <span className="brd-separetor">
                      <i className="fa fa-chevron-right"></i>
                    </span>
                    <span className="breadcrumb-item active">ean shirt</span>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="htc__product__details bg__white ptb--100">
          <div className="htc__product__details__top">
            <div className="container">
              <div className="row">
                <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12">
                  <div className="htc__product__details__tab__content">
                    <div className="product__big__images">
                      <div className="tab-pane  active" id="img-tab-1">
                        <img src="/img/1.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12 smt-40 xmt-40">
                  <div className="ht__product__dtl">
                    <h2>jean shirt to sassy girl</h2>
                    <h6>
                      Model: <span>MNG001</span>
                    </h6>
                    <ul className="rating">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="old">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="old">
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                    <ul className="pro__prize">
                      <li className="old__prize">$82.5</li>
                      <li>$75.2</li>
                    </ul>
                    <p className="pro__info">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis
                      nisl ut aliquip ex ea commodo consequat. Duis autem vel
                      eum iriure dolor in hendrerit in vulputate velit esse
                      molestie consequat, vel illum dolore eu feugiat nulla
                      facilisis at vero eros et accumsan
                    </p>
                    <div className="ht__pro__desc">
                      <div className="sin__desc">
                        <p>
                          <span>Availability:</span> In Stock
                        </p>
                      </div>
                      <div className="sin__desc align--left">
                        <p>
                          <span>color:</span>
                        </p>
                        <ul className="pro__color">
                          <li className="red">
                            <a href="#">red</a>
                          </li>
                          <li className="green">
                            <a href="#">green</a>
                          </li>
                          <li className="balck">
                            <a href="#">balck</a>
                          </li>
                        </ul>
                        <div className="pro__more__btn">
                          <a href="#">more</a>
                        </div>
                      </div>
                      <div className="sin__desc align--left">
                        <p>
                          <span>size</span>
                        </p>
                        <select className="select__size">
                          <option>s</option>
                          <option>l</option>
                          <option>xs</option>
                          <option>xl</option>
                          <option>m</option>
                          <option>s</option>
                        </select>
                      </div>
                      <div className="sin__desc align--left">
                        <p>
                          <span>Categories:</span>
                        </p>
                        <ul className="pro__cat__list">
                          <li>
                            <a href="#">Fashion,</a>
                          </li>
                          <li>
                            <a href="#">Accessories,</a>
                          </li>
                          <li>
                            <a href="#">Women,</a>
                          </li>
                          <li>
                            <a href="#">Men,</a>
                          </li>
                          <li>
                            <a href="#">Kid,</a>
                          </li>
                          <li>
                            <a href="#">Mobile,</a>
                          </li>
                          <li>
                            <a href="#">Computer,</a>
                          </li>
                          <li>
                            <a href="#">Hair,</a>
                          </li>
                          <li>
                            <a href="#">Clothing,</a>
                          </li>
                        </ul>
                      </div>
                      <div className="sin__desc align--left">
                        <p>
                          <span>Product tags:</span>
                        </p>
                        <ul className="pro__cat__list">
                          <li>
                            <a href="#">Fashion,</a>
                          </li>
                          <li>
                            <a href="#">Accessories,</a>
                          </li>
                          <li>
                            <a href="#">Women,</a>
                          </li>
                          <li>
                            <a href="#">Men,</a>
                          </li>
                          <li>
                            <a href="#">Kid,</a>
                          </li>
                        </ul>
                      </div>

                      <div className="sin__desc product__share__link">
                        <p>
                          <span>Share this:</span>
                        </p>
                        <ul className="pro__share">
                          <li>
                            <a href="#" target="_blank">
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>

                          <li>
                            <a href="#" target="_blank">
                              <i className="fa fa-instagram"></i>
                            </a>
                          </li>

                          <li>
                            <a
                              href="https://www.facebook.com/Furny/?ref=bookmarks"
                              target="_blank"
                            >
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>

                          <li>
                            <a href="#" target="_blank">
                              <i className="fa fa-google"></i>
                            </a>
                          </li>

                          <li>
                            <a href="#" target="_blank">
                              <i className="fa fa-linkedin"></i>
                            </a>
                          </li>

                          <li>
                            <a href="#" target="_blank">
                              <i className="fa fa-pinterest-p"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
