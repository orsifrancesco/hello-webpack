import './assets/styles/styles.scss'
import $ from 'jquery';

$(window).on('load', () => { $('html').addClass('loaded'); });

$(window).scroll(() => { });

$(window).resize(() => { });

if (module.hot) { module.hot.accept() }