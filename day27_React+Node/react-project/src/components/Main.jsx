import React, { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    console.log("session Storage : ", sessionStorage.getItem("loginID"));
  }, []);
  return (
    <div>
      {sessionStorage.getItem("loginID") !== null ? (
        <h1>{sessionStorage.getItem("loginID")}님 환영합니다!</h1>
      ) : (
        <h1>로그인 해주세요!</h1>
      )}
    </div>
  );
};

export default Main;
