import $ from "jquery";
import { getUserScoreCookie } from "../cookies/scoreCookie";
import { myScoresList } from "./myscores-list";

export const myScores = () => {
  const content = $('<div class="scoresContent"></div>');
  content.append("<h2>Twoje wyniki</h2>");
  content.append(myScoresList(getUserScoreCookie()));
  return Promise.resolve(content);
};
