import $ from 'jquery';

const loaded = function () {

    setTimeout(() => {
        $('html').addClass('loaded');
    }, 1000);

}

export default loaded;