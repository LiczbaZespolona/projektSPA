import $ from "jquery";

export const scoresListItem = (score) => {
  const tr = $("<tr></tr>");
  tr.append(`<td>${score.score}</td>`);
  tr.append(`<td>${score.duration}</td>`);
  tr.append(`<td>${score.nick}</td>`);
  tr.append(`<td>${score.datetime}</td>`);

  return tr;
};
