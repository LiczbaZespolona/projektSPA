import $ from "jquery";
import { routeChange } from "../router/route-change";

export const home = () => {
  const fragment = $("<section></section>");

  fragment.append("<h2>Rachmistrz wita!!</h2>").append("<p>Ćwicz z nami tabliczkę mnozenia.</p>").append("<p>Zmierz się z innymi i pokaż co potrafisz!</p>");

  const anchor = $('<a class="btn btn-lg btn-success text-light"></a>');
  anchor.text("Zacznij juz teraz!");
  anchor.on("click", () => fragment.trigger(routeChange, { path: "/exercise" }));
  fragment.append(anchor);

  return Promise.resolve(fragment);
};
