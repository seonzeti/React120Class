import React, { useEffect, useState } from "react";

const Ex05 = () => {
  // 화면에 영화 순위를 띄워보자!
  // 랭킹 - 영화제목 - 개봉일자
  // React JSX 특징 <table>를 <thead><tbody>없이 사용 불가
  // <table>
  //  <tbody>
  // <tr>td*3</tr>
  //  </tbody>
  // </table>

  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230301`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setMovieList(res.boxOfficeResult.dailyBoxOfficeList);
      })
      .catch(() => {
        console.log("failed");
      });
  });

  return (
    <div>
      <h1>영화 순위!</h1>
      <table border="1px">
        <tbody>
          {movieList.map((item) => (
            <tr key={item.rnum}>
              <td>{item.rank}</td>
              <td>{item.movieNm}</td>
              <td>{item.openDt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ex05;
