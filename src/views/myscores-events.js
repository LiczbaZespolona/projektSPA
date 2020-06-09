import $ from "jquery"; // Import referencji "$" z pakietu jquery
import { removeUserScoreCookie } from "./../cookies/scoreCookie";

export const scoresCollapse = () => {
  const fragment = $(new DocumentFragment());

  $(document.body).on("score-collapse", (event, detail) => {
    const id = "#collapse" + detail.id;
    $(id).toggleClass("show");
  });

  $(document.body).on("score-remove", (event, detail) => {
    removeUserScoreCookie(detail.id);
  });
  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  return fragment;
};
