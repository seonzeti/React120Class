import React, { useEffect } from "react";

const Ex04_Timer = () => {
  useEffect(() => {
    // 화면이 렌더링 된 이후
    console.log("timer enter");

    const timer = setInterval(() => {
      console.log("타이머 진행 중..");
    }, 1000);

    // useEffect 안의 return : componentWillUnMount의 역할
    // useEffect 안에서 실행되었던 코드가 clean-up 되어야 할 때
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <h3>타이머가 시작했습니다!</h3>;
};

export default Ex04_Timer;
