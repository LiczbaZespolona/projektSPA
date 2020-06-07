import $ from "jquery"; // Import referencji "$" z pakietu jquery
import { Cookie } from "./cookie";
import { getUsernameCookie } from "./usernameCookie";

const cookieScore = new Cookie(`${getUsernameCookie()}_SCORE`);

export const getUserScoreCookie = () => {
  const score = [];
  score = cookieScore.get();
  return score;
};

export const emptyUserScoreCookie = () => {
  cookieScore.empty();
  return true;
};

export const addUserScoreCookie = (newscore) => {
  const oldscores = [];
  oldscores = cookieScore.get();
  const newscores = oldscores.concat(newscore);
  cookieScore.set(newscores);
  return true;
};
