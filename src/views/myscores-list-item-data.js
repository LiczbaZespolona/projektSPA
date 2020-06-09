import $ from "jquery";

export const myScoresListItemData = (score) => {
  const fragment = $(new DocumentFragment());
  fragment.append(`<h5>Podejście zozpoczęte: <i>${score.end}</i>, zakończone <i>${score.end}</i></h5>`);
  fragment.append(
    `<h6>Długość podejścia: <i><span class="text-important text-big">${score.duration}</spam></i> sek., poprawnych odpowiedzi: <i><span class="text-success text-big">${score.goodAnswers}</span>, błędnych odpowiedzi: <i><span class="text-danger text-big">${score.badAnswers}</span></i></h6>`
  );
  fragment.append(`<h6>Wykonane zadania:</h6>`);

  score.exercises.forEach((exercise) => {
    const phar = $(`<p class="answear">${exercise.a} &#8901; ${exercise.b} = ${exercise.answer}</p>`);
    if (exercise.a * exercise.b == exercise.answer) {
      phar.append('<i class="fa  fa-thumbs-up text-success" aria-hidden="true"></i>');
    } else {
      phar.append('<i class="fa  fa-thumbs-down text-danger" aria-hidden="true"></i>');
    }
    fragment.append(phar);
  });
  return fragment;
};
