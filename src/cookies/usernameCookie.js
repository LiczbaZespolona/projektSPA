import $ from "jquery"; // Import referencji "$" z pakietu jquery
import { Cookie } from "./cookie";

export const usernameCookie = () => {
  const cookie = new Cookie("USER_NAME");
  const fragment = $(new DocumentFragment());

  // fragment.append('<span id="basket">Pusty koszyk</span>').find("#basket").text(cookie.get());

  // Nasłuchiwanie zdarzenia thumbs up od komentarza
  // $(document.body).on("thumbs-up-click", (event, detail) => {
  //   //console.log(event);
  //   //console.warn(detail);
  //   $("#basket").text("klik od " + detail.comment);
  // });
  $(document.body).on("name-added", (event, detail) => {
    cart.set(detail.name);
  });

  return fragment;
};
