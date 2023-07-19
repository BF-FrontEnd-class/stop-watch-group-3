export const data = {
  date: new Date(),
  timerInterval: null,
  isTimerRunning: false,
  minutes: "00",
  seconds: "00",
  milliseconds: "00",
};

export const dom = {
  watch: document.querySelector("#watch"),
  buttons: document.querySelector("#buttons"),
  minutes: document.querySelector(".minutes"),
  seconds: document.querySelector(".seconds"),
  milliseconds: document.querySelector(".milliseconds"),
};
