import $ from "jquery"; // Import referencji "$" z pakietu jquery

export const scoresCollapse = () => {
  const fragment = $(new DocumentFragment());

  $(document.body).on("score-collapse", (event, detail) => {
    console.log(event);
    console.warn(detail);
    const id = "#collapse" + detail.id;
    $(id).toggleClass("show");
  });

  return fragment;
};
