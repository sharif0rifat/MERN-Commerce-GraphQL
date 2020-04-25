import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../assets/css/shortcode/default.css";
import "../../assets/css/shortcode/slider.css";
import "../../assets/css/site/owl.carousel.min.css";
import CarousalItem from "./caraousaItem";
import "./collection.css";
export interface ICollectionProps {}

export default class Collection extends React.Component<ICollectionProps> {
  public render() {
    return (
      <div className="slider__container slider--one bg__cat--3">
        <div className="slide__container slider__activation__wrap owl-carousel owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div className="owl-stage slider-animation">
              <div className="owl-item cloned" style={{ width: "1349px" }}>
                <CarousalItem></CarousalItem>
              </div>
              <div className="owl-item cloned" style={{ width: "1349px" }}>
                <CarousalItem></CarousalItem>
              </div>
              <div className="owl-item cloned" style={{ width: "1349px" }}>
                <CarousalItem></CarousalItem>
              </div>
              <div className="owl-item cloned" style={{ width: "1349px" }}>
                <CarousalItem></CarousalItem>
              </div>
            </div>
          </div>
          <div className="owl-nav">
            <div className="owl-prev">
              <i className="fa fa-angle-left"></i>
            </div>
            <div className="owl-next">
              <i className="fa fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
