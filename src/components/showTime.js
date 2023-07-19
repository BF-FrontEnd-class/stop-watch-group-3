import { data, dom } from "../data.js";

const showTime = () => {
  dom.minutes.innerHTML = data.minutes;
  dom.seconds.innerHTML = data.seconds;
  dom.milliseconds.innerHTML = data.milliseconds;
};

export default showTime;
