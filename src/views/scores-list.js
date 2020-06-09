import $ from "jquery";
import { scoresListItem } from "./scores-list-item";

export const scoresList = (scores) => {
  const table = $('<table class="table table-striped table-hover table-borderless table-scores"></table>');
  table.append('<thead class="thead-light"><tr><th>Wynik</th><th>Czas [s]</th><th>Nick</th><th>Kiedy</th></tr></thead>');
  const tableBody = $("<tbody></tbody>");
  // podczepiam do listy kolejne zmapowane pozycje
  scores.map((score) => scoresListItem(score)).map((scoresListItems) => tableBody.append(scoresListItems));
  table.append(tableBody);
  return table;
};
