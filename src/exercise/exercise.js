import $ from "jquery"; // Import referencji "$" z pakietu jquery
import { digitPresed } from "./actions";

export const exercise = () => {
  const fragment = $(new DocumentFragment());
  // Nasłuchiwanie zdarzenia
  $(document.body).on("digitPresed", (event, detail) => {
    console.log(event);
    console.warn(detail);
    digitPresed(detail.digit);
  });
  $(document.body).on("room-to-cart", (event, detail) => {
    //console.log(event);
    //console.warn(detail);
  });

  return fragment;
};
