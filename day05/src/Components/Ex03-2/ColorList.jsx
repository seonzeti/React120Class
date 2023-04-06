import React from "react";

const ColorList = ({ setChoiceColor }) => {
  let color = ["red", "orange", "yellow", "green", "blue"];

  const ck = (e) => {
    console.log("ck", e.target.style.backgroundColor);
    setChoiceColor(e.target.style.backgroundColor);
  };
  let listStyle = {
    display: "flex",
  };

  return (
    <div style={listStyle}>
      {color.map((item, idx) => (
        <div
          onClick={ck}
          key={item + idx}
          style={{
            backgroundColor: `${item}`,
            width: "100px",
            height: "100px",
          }}
        ></div>
      ))}
    </div>
  );
};

export default ColorList;
