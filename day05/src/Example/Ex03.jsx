import React, { useState } from "react";
import Content from "../Components/Ex03/Content";
import Footer from "../Components/Ex03/Footer";
import Header from "../Components/Ex03/Header";
import { ThemeContext } from "../context/ThemeContext";

const Ex03 = () => {
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

export default Ex03;
