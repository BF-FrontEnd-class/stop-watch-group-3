// import startTimer from '../utils/startTimer.js';
import stopTimer from "../utils/stopTimer.js";
import resetTimer from "../utils/resetTimer.js";
import { data } from "../data.js";
import showTime from "../components/showTime.js";
import getTime from "../utils/getTime.js";

const buttonsHandler = (e) => {
  if (e.target.id === "start") {
    if (!data.isTimerRunning) {
      data.timerInterval = setInterval(() => {
        getTime();
        showTime();
      }, 1);
      data.isTimerRunning = true;
    }
  } else if (e.target.id === "pause") {
    stopTimer();
  } else if (e.target.id === "reset") {
    resetTimer();
    showTime();
  }
};

export default buttonsHandler;
