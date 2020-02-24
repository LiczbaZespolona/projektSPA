import 'bootstrap/dist/css/bootstrap.css';
//import './it-spa.css';
import './it-spa.scss';
import $ from 'jquery';  // Import referencji "$" z pakietu jquery
import { Router } from './router/router';
import { nav } from './navigation/nav';

const main = $('main'); //Outlet na zmieniającą się treść

const router = new Router();

router.mount(main);     //Podpinanie maina by w obiekcie można go było zmieniać

router.init();

main.before(nav()); //podpięcie manu navigacji na początek strony przed outlet



