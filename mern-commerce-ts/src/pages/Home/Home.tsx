import * as React from "react";
import Collection from "./collection/collection";
import TestService from "../../sevices/test";
import NewArrival from "../../misc-component/new-arrival/new-arrival";
export interface IHomeProps {}

export default class Home extends React.Component<IHomeProps> {
  test: TestService = new TestService();
  componentDidMount() {
    this.test.GetTestResult();
  }
  public render() {
    return (
      <div>
        <Collection></Collection>
        <NewArrival></NewArrival>
      </div>
    );
    //return <div>Home</div>;
  }
}
