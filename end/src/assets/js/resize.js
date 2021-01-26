import $ from 'jquery';

const resize = function () {

    console.log(
        'resize',
        $(window).width(),
        $(window).height()
    );

}

export default resize;