import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
//import './it-spa.css';
import "./sass/it-spa.scss";
import $ from "jquery"; // Import referencji "$" z pakietu jquery
import { Router } from "./router/router";
import { nav } from "./navigation/nav";
import { usernameCookie } from "./cookies/usernameCookie";
import { exercise } from "./exercise/exercise";
import { init } from "./exercise/actions";

const main = $("main"); //Outlet na zmieniającą się treść

const router = new Router();

router.mount(main); //Podpinanie maina by w obiekcie można go było zmieniać

router.init();

main.before(nav()); //podpięcie manu navigacji na początek strony przed outlet

main.after(exercise());

init();

main.after(usernameCookie()); //podpięcie koszyka
