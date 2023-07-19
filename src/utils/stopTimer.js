import { data } from "../data.js";

const stopTimer = () => {
  clearInterval(data.timerInterval);
  data.isTimerRunning = false;
};

export default stopTimer;
