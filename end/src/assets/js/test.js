import $ from 'jquery';

function test() {

    $('.hero h2').click(() => {

        alert('Hi!!');

    });

    $('.logo').click(() => {

        confirm('Are you sure?!', function () {
            $('.logo').toggleClass('tomato');
            console.log('Ok, you are sure..');
        });

    });

}

export default test;