import React, { useEffect, useState } from "react";
import { FaRegBell } from "react-icons/fa";

const Header = () => {
  const [currentDay, setCurrentDay] = useState(new Date());

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDay(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = currentDay.getHours();
  const minutes = currentDay.getMinutes();
  const amOrPm = hours >= 12 ? "p.m." : "a.m.";

  const hours12 = hours % 12 || 12;

  return (
    <div className="header">
      <span>Welcome Raccoon</span>
      <div className="img-container">
        <a href="/">
          <FaRegBell />
        </a>
        <p className="header-day">
          {daysOfWeek[currentDay.getDay()]}, {hours12}:
          {minutes < 10 ? `0${minutes}` : minutes} {amOrPm}
        </p>
        <img src="./raccoon.png" />
      </div>
    </div>
  );
};

export default Header;
