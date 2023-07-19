// import { data, dom } from "../data.js";

// const showTime = () => {
//   dom.minutes.innerHTML = data.minutes;
//   dom.seconds.innerHTML = data.seconds;
//   dom.milliseconds.innerHTML = data.milliseconds;
// };

// export default showTime;


import { data, dom } from "../data.js";

// let lastMinute = null;
// let lastSecond = null;

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
