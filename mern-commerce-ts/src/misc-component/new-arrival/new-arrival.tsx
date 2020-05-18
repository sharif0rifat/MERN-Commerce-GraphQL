import * as React from "react";
import TestService from "../../sevices/test";
import ProductCard from "../../common-components/product-card/product-card";
export interface IHomeProps {}

export default class NewArrival extends React.Component<IHomeProps> {
  test: TestService = new TestService();
  componentDidMount() {
    this.test.GetTestResult();
  }
  public render() {
    return (
      <div className="htc__product__container">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-3 col-sm-4 col-xs-12">
              <ProductCard></ProductCard>
            </div>
          </div>
        </div>
      </div>
    );
    //return <div>Home</div>;
  }
}
