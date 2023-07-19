import { data } from "../data.js";
import stopTimer from "../utils/stopTimer.js";
import resetTimer from "../utils/resetTimer.js";
import getTime from "../utils/getTime.js";
import showTime from "../components/showTime.js";

const buttonsHandler = (e) => {
  if (e.target.id === "start") {
    if (!data.isTimerRunning) {
      data.timerInterval = setInterval(() => {
        showTime();
        getTime();
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
