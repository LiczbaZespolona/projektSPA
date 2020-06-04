import $ from "jquery";
import { navItem } from "./nav-item";
import { routeChange } from "../router/route-change";
import { routes } from "../router/routes";
import logoImage from "./../../image/RachMistrzLogo.png";

export const nav = () => {
  const navbar = $(`<nav class="navbar navbar-expand-md navbar-light bg-light sticky-top"></nav>`);
  const anchor = $('<a class="navbar-brand"></a>');
  anchor.html(`<img src="${logoImage}" alt="Rachmistrz logo." class="mr-1 mt-1" style="width:136px; cursor: pointer;">`);
  anchor.on("click", () => navbar.trigger(routeChange, { path: "/" }));
  navbar.append(anchor);
  const button = $('<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavbar"><span class="navbar-toggler-icon"></span></button>');
  navbar.append(button);
  const unorderedList = $(`<ul class="navbar-nav mr-auto"></ul>`);
  const collapsibleDiv = $('<div class="collapse navbar-collapse" id="mainNavbar"></div>');
  collapsibleDiv.append(unorderedList);
  navbar.append(collapsibleDiv);

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
