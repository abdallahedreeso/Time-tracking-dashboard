import React, { useState } from "react";
import Card from "./components/Cards";
import "./App.css";

const data = [
  {
    title: "Work",
    bgImg: "/images/icon-work.svg",
    bgColor: "hsl(15, 100%, 70%)",
    timeframes: {
      daily: { current: 5, previous: 7 },
      weekly: { current: 32, previous: 36 },
      monthly: { current: 103, previous: 128 },
    },
  },
  {
    title: "Play",
    bgImg: "/images/icon-play.svg",
    bgColor: "hsl(195, 74%, 62%)",

    timeframes: {
      daily: { current: 1, previous: 2 },
      weekly: { current: 10, previous: 8 },
      monthly: { current: 23, previous: 29 },
    },
  },
  {
    title: "Study",
    bgImg: "/images/icon-study.svg",
    bgColor: "hsl(348, 100%, 68%)",

    timeframes: {
      daily: { current: 0, previous: 1 },
      weekly: { current: 4, previous: 7 },
      monthly: { current: 13, previous: 19 },
    },
  },
  {
    title: "Exercise",
    bgImg: "/images/icon-exercise.svg",
    bgColor: "hsl(145, 58%, 55%)",

    timeframes: {
      daily: { current: 1, previous: 1 },
      weekly: { current: 4, previous: 5 },
      monthly: { current: 11, previous: 18 },
    },
  },
  {
    title: "Social",
    bgImg: "/images/icon-social.svg",
    bgColor: "hsl(264, 64%, 52%)",

    timeframes: {
      daily: { current: 1, previous: 3 },
      weekly: { current: 5, previous: 10 },
      monthly: { current: 21, previous: 23 },
    },
  },
  {
    title: "Self Care",
    bgImg: "/images/icon-self-care.svg",
    bgColor: "hsl(43, 84%, 65%)",

    timeframes: {
      daily: { current: 0, previous: 1 },
      weekly: { current: 2, previous: 2 },
      monthly: { current: 7, previous: 11 },
    },
  },
];

function App() {
  const [activePeriod, setActivePeriod] = useState("weekly");

  const handlePeriodChange = (period) => {
    setActivePeriod(period);
  };

  return (
    <main>
      <div className="activities">
        <div className="profile-card">
          <div class="profile">
            <img
              src="./images/image-jeremy.png"
              alt=""
              className="profile-img"
            />
            <div class="text">
              <p>Report for</p>
              <h3>Jeremy Robson</h3>
            </div>
          </div>
          <div className="periods">
            <button
              id="daily"
              className={activePeriod === "daily" ? "active" : ""}
              onClick={() => handlePeriodChange("daily")}
            >
              Daily
            </button>

            <button
              id="weekly"
              className={activePeriod === "weekly" ? "active" : ""}
              onClick={() => handlePeriodChange("weekly")}
            >
              Weekly
            </button>

            <button
              id="monthly"
              className={activePeriod === "monthly" ? "active" : ""}
              onClick={() => handlePeriodChange("monthly")}
            >
              Monthly
            </button>
          </div>
        </div>

        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            current={item.timeframes[activePeriod].current}
            previous={
              activePeriod === "daily"
                ? "Yesterday"
                : activePeriod === "weekly"
                ? "Last Week"
                : "Last Month"
            }
            previousHour={item.timeframes[activePeriod].previous}
            bgImg={item.bgImg}
            bgColor={item.bgColor}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
