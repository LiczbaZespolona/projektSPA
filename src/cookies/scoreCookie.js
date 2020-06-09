import $ from "jquery"; // Import referencji "$" z pakietu jquery
import { Cookie } from "./cookie";
import { getUsernameCookie } from "./usernameCookie";
import { myScores } from "./../views/myscores";

const cookieScore = new Cookie(`${getUsernameCookie()}_SCORE`);

export const getUserScoreCookie = () => {
  let score = [];
  score = cookieScore.get();
  return score;
};
export const unsetUserScoreCookie = () => {
  cookieScore = {};
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
  $("li#navItem_myscores>a").trigger("click");
  return true;
};
