import * as React from "react";
import crsl from "../../assets/css/images/slider/fornt-img/2.png";
export interface ICarousalItemProps {}

export default class CarousalItem extends React.Component<ICarousalItemProps> {
  public render() {
    return (
      <div className="single__slide animation__style01 slider__fixed--height">
        <div className="container">
          <div className="row align-items__center">
            <div className="col-md-7 col-sm-7 col-xs-12 col-lg-6">
              <div className="slide">
                <div className="slider__inner">
                  <h2>collection 2018</h2>
                  <h1>NICE CHAIR</h1>
                  <div className="cr__btn">
                    <a href="#">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-5 col-xs-12 col-md-5">
              <div className="slide__thumb">
                <img src={crsl} alt="slider images" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
