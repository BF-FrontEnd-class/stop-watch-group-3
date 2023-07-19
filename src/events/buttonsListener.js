import { dom } from "../data.js";
import buttonsHandler from "../handlers/buttonHandler.js";

dom.buttons.addEventListener("click", (e) => {
  buttonsHandler(e);
});
