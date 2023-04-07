import React, { Component } from "react";

// Class Component : rcc
export default class Ex01 extends Component {
  constructor(props) {
    // constructor : 생성자
    // => state 값을 초기화할 때 사용

    // super(props)와 함께 사용하는 것을 권고
    // 이유? this.props 사용 시 생성자 내에서 정의 되지 않아 버그 발생 가능성
    super(props);

    this.state = {
      counter: 0,
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  //   숫자를 증가하는 함수
  handleIncrement() {
    this.setState({
      counter: (this.state.counter += 1),
    });
  }

  //   숫자를 감소하는 함수
  handleDecrement() {
    this.state.counter > 0 &&
      this.setState({
        counter: (this.state.counter -= 1),
      });
  }

  render() {
    return (
      <div>
        <h1>class Counter : {this.state.counter}</h1>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}
