import './assets/styles/styles.scss'
import $ from 'jquery';
import loaded from '../src/assets/js/loaded';
import scroll from '../src/assets/js/scroll';
import resize from '../src/assets/js/resize';
import alertEl from '../src/assets/js/alertEl';
import routes from '../src/assets/js/routes';

import test from '../src/assets/js/test';
test();

const isLive = location.hostname != 'localhost';
const apiUrl = isLive ? process.env.APIURL : process.env.APIURLDEBUG;

$(window).on('load', () => { loaded(); });

$(window).scroll(() => { scroll(); });

$(window).resize(() => { resize(); });

alert = function (text) { alertEl(text); }
confirm = function (text, callback) { alertEl(text, callback); }

if (isLive) { alert('it is live!! ' + apiUrl); }

if (module.hot) { module.hot.accept() }