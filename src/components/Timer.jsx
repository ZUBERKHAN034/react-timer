import React, { useState } from "react";

export default function Timer() {
  const getCurrentTime = () => new Date().toLocaleTimeString().split(" ")[0];
  const currentTime = getCurrentTime();
  const [time, setTime] = useState(currentTime);
  const getTime = () => setTime(getCurrentTime());
  setInterval(getTime, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}
