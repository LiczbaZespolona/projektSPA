import $ from "jquery"; // Import referencji "$" z pakietu jquery
import { digitPresed, start, next, init } from "./actions";

export const exercise = () => {
  const fragment = $(new DocumentFragment());
  // Nasłuchiwanie zdarzenia
  $(document.body).on("keyPresed", (event, detail) => {
    // digitPresed(detail.digit);
    keyPressed(event);
  });
  $(document.body).on("digitPresed", (event, detail) => {
    digitPresed(detail.digit);
  });
  $(document.body).on("startPresed", (event, detail) => {
    start();
  });
  $(document.body).on("nextPresed", (event, detail) => {
    next();
  });
  $(document.body).on("exerciseLoaded", (event, detail) => {
    init();
  });

  return fragment;
};
