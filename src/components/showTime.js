import { data, dom } from "../data.js";

const showTime = () => {
  if (data.minutes !== data.lastMinute) {
    dom.minutes.innerHTML = data.minutes;
    data.lastMinute = data.minutes;
  }

  if (data.seconds !== data.lastSecond) {
    dom.seconds.innerHTML = data.seconds;
    data.lastSecond = data.seconds;
  }

  dom.milliseconds.innerHTML = data.milliseconds;
};

export default showTime;
