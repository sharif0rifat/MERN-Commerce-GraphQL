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
      <div className="container">
        <div className="row">Bread Crumb</div>
        <div className="row">
          <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12">
            <div className="htc__product__details__tab__content">
              <div className="product__big__images">
                <div className="tab-pane  active">
                  <img src="/img/1.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12">
            Description
          </div>
        </div>
      </div>
    );
  }
}
