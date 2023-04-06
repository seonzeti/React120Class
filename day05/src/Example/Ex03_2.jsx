import React, { useState } from "react";
import ColorList from "../Components/Ex03-2/ColorList";
import { ColorContext } from "../context/ColorContext";

const Ex03_2 = () => {
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
        <h1>바꾼 색상</h1>
      </div>
    </ColorContext.Provider>
  );
};

export default Ex03_2;
