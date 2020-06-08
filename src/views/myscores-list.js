import $ from "jquery";
import { myScoresListItem } from "./myscores-list-item";

export const myScoresList = (scores) => {
  const div = $('<div id="accordion" class="scores"></div');
  // doczepia liste wynikó wpobierana z ciasteczka
  scores.map((score, index) => myScoresListItem(score, index)).map((myScoreListItems) => div.prepend(myScoreListItems));

  return div;
};
