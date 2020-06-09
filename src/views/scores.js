import $ from "jquery";
import { scoresService } from "../common/scores-service";
import { scoresList } from "./scores-list";

export const scores = () => {
  const content = $('<div class="scoresContent"></div>');

  return scoresService.getScores().then((scores) => {
    return content.append("<h2>Tabela wyników</h2>").append(scoresList(scores));
  });
};
