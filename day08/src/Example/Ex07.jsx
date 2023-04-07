import React, { useEffect, useState } from "react";
import axios from "axios";

const Ex07 = () => {
  const [pollution, getPollution] = useState(0);
  const [aqi, setAqi] = useState(0);

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log("success", pos.coords.latitude);
      getData(pos.coords.latitude, pos.coords.longitude);
    });
  };

  const getData = (lat, lon) => {
    console.log("현재 위치는", lat, lon);
    let url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=d98ae2c3057b1f588501393dc077fc5f`;
    axios.get(url).then((res) => {
      console.log("res : ", res.data.list[0].main.aqi);
      switch (res.data.list[0].main.aqi) {
        case 1:
          setAqi("매우 좋음");
          break;
        case 2:
          setAqi("좋음");
          break;
        case 3:
          setAqi("보통");
          break;
        case 4:
          setAqi("나쁨");
          break;
        case 5:
          setAqi("매우 나쁨");
          break;
      }
    });
  };

  useEffect(() => {
    console.log("aqi :", aqi);
  }, [aqi]);

  useEffect(() => {
    getCurrentPosition();
  }, []);

  return (
    <div className="weather-container">
      <h1>현재 대기 오염도</h1>
      <p>현재 위치의 대기 오염도는 {aqi} 입니다.</p>
    </div>
  );
};

export default Ex07;
