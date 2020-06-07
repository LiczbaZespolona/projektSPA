import $ from "jquery";
import { myScoresListItem } from "./myscores-list-item";

export const myScoresList = (scores) => {
  const div = $('<div id="accordion" class="scores"></div');
  // doczepia liste pokoi, gdy tylko przyjdzie z serwera
  scores.map((score, index) => myScoresListItem(score, index)).map((myScoreListItems) => div.prepend(myScoreListItems));

  return div;
};
