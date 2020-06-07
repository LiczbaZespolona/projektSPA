import $ from "jquery"; // Import referencji "$" z pakietu jquery
import { Cookie } from "./cookie";
import { getUsernameCookie } from "./usernameCookie";

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
