import './assets/styles/styles.scss'
import $ from 'jquery';
import loaded from '../src/assets/js/loaded';
import scroll from '../src/assets/js/scroll';
import resize from '../src/assets/js/resize';
import routes from '../src/assets/js/routes';

const isLive = location.hostname != 'localhost';
const apiUrl = isLive ? process.env.APIURL : process.env.APIURLDEBUG;

if (isLive) { alert('it is live!! ' + apiUrl); }

$(window).on('load', () => { loaded(); });

$(window).scroll(() => { scroll(); });

$(window).resize(() => { resize(); });

if (module.hot) { module.hot.accept() }