import $ from 'jquery';

const scroll = function () {

    console.log(
        'scroll',
        $(window).scrollTop()
    );

}

export default scroll;