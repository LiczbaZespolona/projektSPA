import $ from "jquery";
import { scoresListItem } from "./scores-list-item";

export const scoresList = (scores) => {
  const ul = $('<ul class="list-group scores-list"></ul>');

  // podczepiam do listy kolejne zmapowane pozycje
  scores.map((score) => scoresListItem(score)).map((scoresListItems) => ul.append(scoresListItems));

  return ul;
};
