import $ from "jquery"; // Import referencji "$" z pakietu jquery
import { Cookie } from "./cookie";
import { getUsernameCookie } from "./usernameCookie";
import { myScores } from "./../views/myscores";
import { myScoresListItemData } from "../views/myscores-list-item-data";

const cookieScore = new Cookie(`${getUsernameCookie()}_SCORE`);

export const getUserScoreCookie = () => {
  let score = [];
  score = cookieScore.get();
  return score;
};

export const emptyUserScoreCookie = () => {
  cookieScore.empty();
  return true;
};

export const addUserScoreCookie = (newscore) => {
  let oldscores = [];
  oldscores = cookieScore.get();
  oldscores.push(newscore);
  cookieScore.set(oldscores);
  return true;
};
export const removeUserScoreCookie = (index) => {
  let scores = [];
  scores = cookieScore.get();
  scores.splice(index, 1);
  cookieScore.set(scores);
  myScores().then((html) => {
    $("main").empty().append(html);
  });
  return true;
};
