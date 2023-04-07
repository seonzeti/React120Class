import React, { useState } from "react";
import Ex04_Timer from "../Components/Ex04_Timer";

const Ex04 = () => {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div>
      {showTimer && <Ex04_Timer />}
      <button
        onClick={() => {
          setShowTimer(!showTimer);
        }}
      >
        Timer!
      </button>
    </div>
  );
};

export default Ex04;
