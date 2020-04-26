import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../assets/css/shortcode/default.css";
import "../../assets/css/shortcode/slider.css";
import "../../assets/css/site/owl.carousel.min.css";
import CarousalItem from "./caraousaItem";
import "./collection.css";
import { timingSafeEqual } from "crypto";
export interface IProps {}
interface IState {
  translate?: number;
}
export default class Collection extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      translate: 4047,
    };
  }
  moveLeft() {
    var translate = this.state.translate;
    if (translate) {
      translate = translate - 1349;
      if (translate < 1349) translate = 1;
    } else translate = 1;
    this.setState({ ...this.state, translate: translate });
  }
  moveRight() {
    var translate = this.state.translate;
    if (translate) {
      translate = translate + 1349;
      if (translate > 4047) translate = 4047;
    }
    this.setState({ ...this.state, translate: translate });
  }
  public render() {
    //   const styles = {
    //     transform: `translate(${x}px, ${y}px)`
    // }
    return (
      <div className="slider__container slider--one bg__cat--3">
        <div className="slide__container slider__activation__wrap owl-carousel owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div
              className="owl-stage slider-animation"
              style={{
                transform:
                  "translate3d(-" + this.state.translate + "px, 0px, 0px)",
              }}
            >
              <div className="owl-item cloned" style={{ width: "1349px" }}>
                <CarousalItem chair="1"></CarousalItem>
              </div>
              <div className="owl-item cloned" style={{ width: "1349px" }}>
                <CarousalItem chair="2"></CarousalItem>
              </div>
              <div className="owl-item cloned" style={{ width: "1349px" }}>
                <CarousalItem chair="3"></CarousalItem>
              </div>
              <div className="owl-item cloned" style={{ width: "1349px" }}>
                <CarousalItem chair="4"></CarousalItem>
              </div>
            </div>
          </div>
          <div className="owl-nav">
            <div className="owl-prev" onClick={this.moveLeft.bind(this)}>
              <i className="fa fa-angle-left"></i>
            </div>
            <div className="owl-next" onClick={this.moveRight.bind(this)}>
              <i className="fa fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
