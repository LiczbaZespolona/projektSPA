import $ from "jquery";
import { scoresService } from "../common/scores-service";
import { scoresList } from "./scores-list";

export const scores = () => {
  const fragment = $(new DocumentFragment());

  return scoresService.getScores().then((scores) => {
    // console.warn(scores);
    return fragment.append("<h2>Tabela wyników</h2>").append(scoresList(scores)).append("<p>Lorem ipsum </p>");
  });
};
