import $ from 'jquery';

$('body').append(`
    <div id="alert">
        <div class="text">Text message</div>
        <div class="buttons-container">
            <div class="button">Ok</div>
        </div>
        <div class="buttons-container buttons-container--confirm">
            <div class="button button--v2">Cancel</div>
            <div class="button button--ok">Ok</div>
        </div>
    </div>
`);

const close = function () { $('html').removeClass('show-alert'); setTimeout(function () { $('html').removeClass('show-alert--confirm'); }, 500); }

const alertEl = function (text, callback) {

    $('html').addClass('show-alert');
    $('#alert .text').text(text);

    $('#alert .button').unbind('click');
    $('#alert .button').bind("click", function () {
        close();
    });

    if (callback) {
        $('html').addClass('show-alert--confirm');
        $('#alert .button--ok').unbind('click');
        $('#alert .button--ok').bind("click", function () {
            callback();
            close();
        });
    }

}

export default alertEl;