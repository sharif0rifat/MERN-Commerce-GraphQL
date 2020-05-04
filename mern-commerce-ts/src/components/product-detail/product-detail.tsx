import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";

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
      <div>
        Product Detail{this.props.match.params.id}{" "}
        {this.props.match.params.name}
      </div>
    );
  }
}
