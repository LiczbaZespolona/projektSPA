import $ from "jquery";
import { myScoresListItemData } from "./myscores-list-item-data";

export const myScoresListItem = (score, index) => {
  const fragment = $(new DocumentFragment());
  const divCard = $('<div class="card"></div>');
  const divHeader = $('<div class="card-header"></div>');
  const anchor = $(`<a class="card-link score-item" data-toggle="collapse"></a>`).text("Data testu: " + score.start);
  anchor.on("click", () => anchor.trigger("score-collapse", { id: index }));
  const icon = $('<i class="fa fa-times text-danger" aria-hidden="true" data-toggle="tooltip" title="Usuń podejście."></i>');
  icon.on("click", () => icon.trigger("score-remove", { id: index }));
  divHeader.append(anchor);
  divHeader.append(icon);
  const divBody = $(`<div id="collapse${index}" class="collapse" data-parent="#accordion"></div>`);
  const divBodyText = $('<div class="card-body"></div>').html(myScoresListItemData(score));
  divBody.append(divBodyText);
  divCard.append(divHeader).append(divBody);
  fragment.append(divCard);

  return fragment;
};
