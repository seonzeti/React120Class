import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Content = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>홍길동님 좋은 하루 보내세요!</h1>
    </div>
  );
};

export default Content;
