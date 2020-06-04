import $ from "jquery";

export const exerciseButton = (num) => {
  const anchor = $(`<a class="btn btn-info btn-lg mr-1" role="button" id="btn${num}"></a>`);
  anchor.text(num);
  anchor.on("click", () => anchor.trigger("digitPresed", { digit: num }));
  return anchor;
};
