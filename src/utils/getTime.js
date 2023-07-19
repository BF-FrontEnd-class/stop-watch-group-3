import { data } from "../data.js";

const getTime = () => {
  data.date.setMilliseconds(data.date.getMilliseconds() + 1);
  data.minutes =
    data.date.getMinutes() < 10
      ? `0${data.date.getMinutes()}`
      : data.date.getMinutes();
  data.seconds =
    data.date.getSeconds() < 10
      ? `0${data.date.getSeconds()}`
      : data.date.getSeconds();
  data.milliseconds =
    data.date.getMilliseconds() < 100
      ? `0${data.date.getMilliseconds()}`
      : data.date.getMilliseconds();
};

export default getTime;
