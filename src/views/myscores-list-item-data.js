import $ from "jquery";

export const myScoresListItemData = (score) => {
  const fragment = $(new DocumentFragment());
  fragment.append(`<h4>score.end</h4>`);
  return fragment;
};
