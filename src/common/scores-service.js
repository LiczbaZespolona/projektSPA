import { apiUrl } from "./api-url";

export const scoresService = {
  getScores() {
    //pobranie listy zabiegów
    return fetch(apiUrl + "scores.php").then((response) => {
      if (response.ok) {
        //console.log(response.json());
        return response.json();
      }
    });
  },
  getScore(id) {
    //pobranie jednego konkretnego zabiegu
    return fetch(apiUrl + `scores.php&id=${id}`).then((response) => response.json());
  },
};
