import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <CountdownWrapper>
      {Object.entries(timeLeft).map(([unit, value]) => (
        <TimeUnit key={unit}>
          {value} {unit}{" "}
        </TimeUnit>
      ))}
    </CountdownWrapper>
  );
};

const CountdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  background: #f9f9f9;
  border-radius: 4px;
  font-family: "Courier New", Courier, monospace;
`;

const TimeUnit = styled.span`
  margin: 0 10px;
`;

export default Countdown;
