import $ from "jquery";
import { myScoreListItem } from "./myscore-list-item";

export const myScoreList = (rooms) => {
  const ul = $('<ul class="list-group room-list"></ul>');

  // doczepia liste pokoi, gdy tylko przyjdzie z serwera
  rooms.map((room) => myScoreListItem(room)).map((myScoreListItems) => ul.append(myScoreListItems));

  return ul;
};
