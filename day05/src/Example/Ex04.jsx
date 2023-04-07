import React, { useState } from "react";
import Content from "../Components/Ex04/Content";
import Footer from "../Components/Ex04/Footer";
import Header from "../Components/Ex04/Header";
import { ThemeContext } from "../context/Ex04ThemeContext";

const Ex04 = () => {
  // 우리 App의 Theme에 관련된 데이터 => 전역적으로 사용해야하는 데이터
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <div className="page">
        <Header />
        <Content />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default Ex04;
