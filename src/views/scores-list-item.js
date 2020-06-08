import $ from "jquery";

export const scoresListItem = (score) => {
  const li = $('<li class="list-group-item scores-list-item"></li>');
  li.text(score.nick + " " + score.datetime + " " + score.score);
  return li;
};
