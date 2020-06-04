import $ from "jquery";

export const scoresListItem = (treatment) => {
  const li = $('<li class="list-group-item treatment-list-item"></li>');
  li.text(treatment.name);
  return li;
};
