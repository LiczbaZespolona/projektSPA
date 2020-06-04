import $ from "jquery";

export const exerciseButton = (num) => {
  const anchor = $(`<a class="btn btn-info btn-lg mr-1" role="button" id="btn${num}"></a>`);
  anchor.text(num);
  anchor.on("click", () => anchor.trigger("digitPresed", { digit: num }));
  return anchor;
};
export const exerciseBigButton = (num, action) => {
  const anchor = $(`<a class="btn btn-success btn-block mb-2" role="button" id="btn${num}"></a>`);
  anchor.on("click", () => anchor.trigger(action, {}));
  return anchor;
};
