import $ from "jquery";

export const addComment = () => {
  const fragment = $(new DocumentFragment());

  fragment.append("<h2>Ćwiczenia</h2>").append("<p>Lorem ipsum dolor sit amte...</p>");

  return Promise.resolve(fragment);
};
