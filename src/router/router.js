import $ from "jquery";
import { routes } from "./routes";
import { oops } from "../views";
import { routeChange } from "./route-change";

export class Router {
  constructor() {
    this.body = $(document.body); // Obiekt główny do lapania zdarzen
    this.outlet = $("main"); // Outlet na generowane strony
    this.routes = routes; //Lista scierzek z routes - view
  }
  mount(outlet) {
    this.outlet = outlet;

    // Nasłuchiwanie na zdarzenie klik od menu navigacji
    this.body.on(routeChange, (event, detail) => {
      this.navigate(detail.path);
    });
  }

  init() {
    this.navigate(location.pathname);
  }

  get(path) {
    return this.routes.find((route) => route.path === path);
  }

  has(path) {
    return this.get(path) !== undefined;
  }

  navigate(path, data = {}) {
    if (this.has(path)) {
      const { name, component } = this.get(path); // pobranie funkcji strzałkowej z obiektu route(s), generującej tresc strony
      component().then((html) => {
        this.outlet.empty().append(html); //czyszcze stary outlet i wypełniam poprzez funkcje strzałkową
      });
    } else {
      this.outlet.empty().append(oops());
    }

    history.pushState(data, name, path); //Aktualizujemy historie aby user mógł by się cofnąć
  }
}
