import $ from "jquery"; // Import referencji "$" z pakietu jquery
import { Cookie } from "./cookie";

const cookieNick = new Cookie("USER_NAME");

export const usernameCookie = () => {
  const fragment = $(new DocumentFragment());

  $(document.body).on("name-remember", (event, detail) => {
    cookieNick.set($("#nick").val());
    $("#buttonRemember").hide();
    $("#buttonForget").show();
    $("#nick").attr("disabled", true);
  });

  $(document.body).on("name-forget", (event, detail) => {
    cookieNick.empty();
    $("#buttonRemember").show();
    $("#buttonForget").hide();
    $("#nick").attr("disabled", false);
    $("#nick").val("");
  });

  return fragment;
};

export const getUsernameCookie = () => {
  return cookieNick.get();
};
