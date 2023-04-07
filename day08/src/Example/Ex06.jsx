import React, { useState, useEffect } from "react";

import { Button, ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/ex06.css";

const Ex06 = () => {
  // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid="d98ae2c3057b1f588501393dc077fc5f"
  const [city, setCity] = useState("gwangju");
  const [temp, setTemp] = useState("");
  const [icon, setIcon] = useState("");

  const getCity = (e) => {
    setCity(e.target.innerText);
  };

  const getData = () => {
    let url = ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d98ae2c3057b1f588501393dc077fc5f`;
    // fetch ver

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log("weather res: ", res);
        // 켈빈 온도 - 273 = 섭씨 온도
        setTemp(parseInt(res.main.temp - 273));
        setIcon(
          `https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`
        );
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, [city]);
  return (
    <div className="weather-container">
      <h1>현재 날씨</h1>
      <ButtonGroup size="lg" className="mb-2">
        <Button onClick={getCity}>Seoul</Button>
        <Button onClick={getCity}>Tokyo</Button>
        <Button onClick={getCity}>Paris</Button>
      </ButtonGroup>

      {city !== "" && (
        <p>
          <img src={icon}></img>
          현재 {city}의 날씨는 온도 {temp}°C 입니다.
        </p>
      )}
    </div>
  );
};

export default Ex06;
