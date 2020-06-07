import $ from "jquery";

export const myScoresListItem = (score, index) => {
  const fragment = $(new DocumentFragment());
  console.log(score);
  const divCard = $('<div class="card"></div>');
  const divHeader = $('<div class="card-header"></div>');
  const anchor = $(`<a class="card-link score-item" data-toggle="collapse"></a>`).text("Data testu: " + score.start);
  anchor.on("click", () => anchor.trigger("score-collapse", { id: index }));
  divHeader.append(anchor);
  const divBody = $(`<div id="collapse${index}" class="collapse" data-parent="#accordion"></div>`);
  const divBodyText = $('<div class="card-body"></div>').text(score.end);
  divBody.append(divBodyText);
  divCard.append(divHeader).append(divBody);
  fragment.append(divCard);
  // const li = $('<li class="list-group-item score-list-item"></li>');
  // li.text("Data testu: " + score.start);
  // li.append(`<i id="room_${score}" class="fas fa-shopping-cart"></i>`);
  // div.append(li);
  // div.find("i").on("click", () => div.trigger("room-to-cart", { room: score.id }));
  return fragment;
};
