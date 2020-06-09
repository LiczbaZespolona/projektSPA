import $ from "jquery";
import { routeChange } from "../router/route-change";
import { getUsernameCookie } from ".././cookies/usernameCookie";

export const home = () => {
  const fragment = $("<section></section>");
  const content = $('<div class="homeContent"></div>');
  content
    .append('<h3 class="d-flex justify-content-center">RachMistrz wita!!</h3>')
    .append('<p class="d-flex justify-content-center">Ćwicz z nami tabliczkę mnozenia.</p>')
    .append('<p class="d-flex justify-content-center">Zmierz się z innymi i pokaż co potrafisz!</p>');

  const div = $('<div class="d-flex justify-content-center"></div>');
  const label = $("<label></label>");
  label.text("Twój nick:");
  const input = $('<input id="nick" placeholder="nick"></input>');
  const buttonRemember = $('<a id="buttonRemember" class="btn btn-lg btn-success text-light"></a>');
  buttonRemember.text("Zapamiętaj mnie.");
  buttonRemember.on("click", () => div.trigger("name-remember", {}));
  const buttonForget = $('<a id="buttonForget" class="btn btn-lg btn-danger text-light"></a>');
  buttonForget.text("Zapomnij mnie.");
  buttonForget.hide();
  buttonForget.on("click", () => div.trigger("name-forget", {}));
  label.append(input);
  div.append(label);
  content.append(div);
  content.append(buttonRemember);
  content.append(buttonForget);
  const anchor = $('<a id="startNow" class="btn btn-lg btn-success text-light"></a>');
  anchor.text("Zacznij juz teraz!");
  anchor.on("click", () => fragment.trigger(routeChange, { path: "/exercise" }));
  content.append(anchor);
  fragment.append(content);

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
