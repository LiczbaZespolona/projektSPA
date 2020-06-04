import $ from "jquery";
import { treatmentsListItem } from "./scores-list-item";

export const scoresList = (treatments) => {
  const ul = $('<ul class="list-group treatments-list"></ul>');

  // podczepiam do listy kolejne zmapowane pozycje
  treatments
    .map((treatment) => treatmentsListItem(treatment))
    .map((treatmentsListItems) => ul.append(treatmentsListItems));

  return ul;
};
