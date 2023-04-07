import React, { Component } from "react";

export default class Ex02 extends Component {
  // LifeCycle : 어플리케이션의 생성 주기
  // 1. Class Component 에서 state 관리

  // a. constructor 최초 생성
  //      => state 관리, 변수선언, 데이터 관리
  constructor(props) {
    super(props);
    console.log("a. constructor");
    this.state = {
      num: 0,
    };
  }

  // 2. 함수는 선언 없이 사용
  ck = () => {
    console.log("ck");
    this.setState({
      num: this.state.num + 1,
    });
  };

  // b. render 화면을 렌더링 할 때
  //      => 화면을 구성하는 요소
  render() {
    console.log("b. render");
    return (
      <div>
        <h1>LifeCycle : {this.state.num}</h1>
        <button onClick={this.ck}>+1</button>
      </div>
    );
  }

  //   c. componentDidMount 화면 마운트됨!
  //   => API Call
  componentDidMount() {
    console.log("c. componentDidMount");
  }

  //  d. componentDidUpdate 값이 변경되어 갱신이 일어난 직후 호출
  componentDidUpdate() {
    console.log("update!");
  }
}
