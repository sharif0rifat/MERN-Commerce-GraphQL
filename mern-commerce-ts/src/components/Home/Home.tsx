import * as React from "react";
import Collection from "../collection/collection";
import TestService from "../../sevices/test";
export interface IHomeProps {}

export default class Home extends React.Component<IHomeProps> {
  test: TestService = new TestService();
  componentDidMount() {
    this.test.GetTestResult();
  }
  public render() {
    // return <Collection></Collection>;
    return <div>Home</div>;
  }
}
