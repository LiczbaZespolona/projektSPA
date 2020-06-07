import $ from "jquery"; // Import referencji "$" z pakietu jquery
import { Cookie } from "./cookie";

export const userScoreCookie = (name) => {
  const cookie = new Cookie(`${name}_SCORE`);
  const fragment = $(new DocumentFragment());

  $(document.body).on("save-score", (event, detail) => {
    cart.set(detail.name);
  });

  return fragment;
};
