import { home, myScore, scores, exercise, comments, addComment } from "../views";

export const routes = [
  { display: true, name: "Start", path: "/", data: {}, component: home },
  { display: true, name: "Ćwiczenia", path: "/exercise", data: {}, component: exercise },
  { display: true, name: "Moje wyniki", path: "/myscores", data: {}, component: myScore },
  { display: true, name: "Tabela wyników", path: "/scors", data: {}, component: scores },
  { display: true, name: "Comments", path: "/comments", data: {}, component: comments },
  { display: false, name: "AddComments", path: "/addcomment", data: {}, component: addComment },
];
