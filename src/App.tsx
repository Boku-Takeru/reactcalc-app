import React from "react";
// import logo from './logo.svg';
import styled from "styled-components";
import "./App.css";

function App(this: any) {
  return (
    <div className="AllBox">
      <input type="text" className="DisplayLayout" value={"display"} disabled />
      <div className="InputForm">
        <button onClick={this.click} data-num="7">
          7
        </button>
        <button onClick={this.click} data-num="8">
          8
        </button>
        <button onClick={this.click} data-num="9">
          9
        </button>
        <button onClick={this.handleOperator} data-num="/">
          ÷
        </button>
        <button onClick={this.click} data-num="4">
          4
        </button>
        <button onClick={this.click} data-num="5">
          5
        </button>
        <button onClick={this.click} data-num="6">
          6
        </button>
        <button onClick={this.handleOperator} data-num="*">
          ×
        </button>
        <button onClick={this.click} data-num="1">
          1
        </button>
        <button onClick={this.click} data-num="2">
          2
        </button>
        <button onClick={this.click} data-num="3">
          3
        </button>
        <button onClick={this.handleOperator} data-num="-">
          -
        </button>
        <button onClick={this.click} data-num="0">
          0
        </button>
        <button onClick={this.clearKey} data-num="C">
          C
        </button>
        <button onClick={this.equalKey} data-num="=">
          =
        </button>
        <button onClick={this.handleOperator} data-num="+">
          +
        </button>
      </div>
    </div>
  );
}

export default App;
