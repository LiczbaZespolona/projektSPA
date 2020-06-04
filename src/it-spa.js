import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
//import './it-spa.css';
import "./sass/it-spa.scss";
import $ from "jquery"; // Import referencji "$" z pakietu jquery
import { Router } from "./router/router";
import { nav } from "./navigation/nav";
import { itSpaCart } from "./cart/it-spa-cart";
import { exercise } from "./exercise/exercise";

const main = $("main"); //Outlet na zmieniającą się treść

const router = new Router();

router.mount(main); //Podpinanie maina by w obiekcie można go było zmieniać

router.init();

main.before(nav()); //podpięcie manu navigacji na początek strony przed outlet

main.after(exercise());
main.after(itSpaCart()); //podpięcie koszyka
