import $ from "jquery";
import { routeChange } from "../router/route-change";
import { getUsernameCookie } from ".././cookies/usernameCookie";

export const home = () => {
  const fragment = $("<section></section>");

  fragment.append("<h2>Rachmistrz wita!!</h2>").append("<p>Ćwicz z nami tabliczkę mnozenia.</p>").append("<p>Zmierz się z innymi i pokaż co potrafisz!</p>");

  const div = $("<div></div>");
  const label = $("<label></label>");
  label.text("Twój nick:");
  const input = $('<input id="nick" placeholder=""></input>');
  const buttonRemember = $('<a id="buttonRemember" class="btn btn-lg btn-success text-light"></a>');
  buttonRemember.text("Zapamiętaj mnie.");
  buttonRemember.on("click", () => div.trigger("name-remember", {}));
  const buttonForget = $('<a id="buttonForget" class="btn btn-lg btn-danger text-light"></a>');
  buttonForget.text("Zapomnij mnie.");
  buttonForget.hide();
  buttonForget.on("click", () => div.trigger("name-forget", {}));
  label.append(input);
  div.append(label);
  div.append(buttonRemember);
  div.append(buttonForget);

  fragment.append(div);
  const anchor = $('<a class="btn btn-lg btn-success text-light"></a>');
  anchor.text("Zacznij juz teraz!");
  anchor.on("click", () => fragment.trigger(routeChange, { path: "/exercise" }));
  fragment.append(anchor);
  //$(document).ready()
  // $(document).on("ready", () => fragment.trigger("home-loaded", {}));

  const nick = getUsernameCookie();
  //console.log("nick:" + nick);
  if (nick.length > 0) {
    buttonRemember.hide();
    buttonForget.show();
    input.val(nick);
  } else {
    buttonRemember.show();
    buttonForget.hide();
    input.val("");
  }
  return Promise.resolve(fragment);
};
