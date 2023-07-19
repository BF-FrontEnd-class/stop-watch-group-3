import { data } from "../data.js";

const resetTimer = () => {
  clearInterval(data.timerInterval);
  data.isTimerRunning = false;
  data.date.setMilliseconds(0);
  data.date.setSeconds(0);
  data.date.setMinutes(0);

  data.milliseconds = "000";
  data.seconds = "00";
  data.minutes = "00";
};

export default resetTimer;
