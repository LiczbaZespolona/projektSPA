import $ from "jquery";
import { navItem } from "./nav-item";
import { routeChange } from "../router/route-change";
import { routes } from "../router/routes";

export const nav = () => {
  const navbar = $(`
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <span class="navbar-brand">IT-SPA</span>
        <ul class="navbar-nav mr-auto"></ul>
    </nav>
    `);

  //const bookingNavItem = navItem("Booking", () => navbar.trigger(routeChange, {path: '/booking'}));   //Emitowanie zdarzenia przez element po kliknięciu
  // mapowanie kolejnych elementów routes na pozycje menu
  routes.map((route) => {
    if (route.display) navbar.find("ul").append(navItem(route.name, () => navbar.trigger(routeChange, { path: route.path }))); //Podczepienie pozycji menu do menu
  });
  // const navItems = routes.map( (route) => {
  //     return navItem(route.name, () => navbar.trigger(routeChange, {path: route.path}));    //Podczepienie pozycji menu do menu
  // });
  // navbar.find('ul').append(navItems);

  return navbar;
};
