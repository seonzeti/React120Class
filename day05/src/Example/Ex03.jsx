import React, { useState } from "react";
import ColorList from "../Components/Ex03/ColorList";
import ColorResult from "../Components/Ex03/ColorResult";

import { ColorContext } from "../context/Ex03ColorContext";

const Ex03 = () => {
  const [choiceColor, setChoiceColor] = useState("hello");

  let containerStyle = {
    margin: "2%",
  };
  return (
    <ColorContext.Provider value={{ setChoiceColor, choiceColor }}>
      <div style={containerStyle}>
        <h1>색상 변경하기</h1>
        <ColorList />
        <br />
        <hr></hr>
        <br />
        <h1>선택한 색상</h1>
        <ColorResult />
      </div>
    </ColorContext.Provider>
  );
};

export default Ex03;
