import $ from "jquery";
import { getUserScoreCookie } from "../cookies/scoreCookie";
import { myScoresList } from "./myscores-list";

export const myScores = () => {
  const fragment = $(new DocumentFragment());

  fragment.append("<h2>Twoje wyniki:</h2>").append(myScoresList(getUserScoreCookie()));

  return Promise.resolve(fragment);
};
