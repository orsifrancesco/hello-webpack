import $ from 'jquery';
import Navigo from "navigo";
import axios from 'axios'
import config from '../js/config';

const router = new Navigo('/');

function ajaxContent({ url }) {

    const content = '.content .container';

    $(content).empty();
    $(content).append('<div class="loading">Loading..</div>')

    axios.get(url)
        .then(function (response) {
            console.log(response);
            $(content).empty();
            const html = response.data.map(el => `<div>${el.username} <a target="_blank" href="http://${el.website}">${el.website}</a></div>`).join('');
            $(content).append(html);
        })
        .catch(function (error) {
            console.log(error);
            $(content).empty();
            $(content).append('<div class="error">Error!!</div>');
        })
        .then(function () { /* always executed */ });

}

function staticContent(children) {

    const content = '.content .container';

    $(content).empty();
    $(content).append(children)

}

router.on('/', function () {
    console.log('Home!!!');
    staticContent(`
    
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus bibendum massa id malesuada. Aliquam
    congue sed nibh sit amet ullamcorper. Nulla aliquet urna vitae nisi vestibulum, id tristique velit congue.
    Nulla
    ut lectus mattis, gravida lacus a, pellentesque arcu. Suspendisse feugiat sapien eget est congue, vitae
    commodo
    libero ullamcorper. Cras ultrices ante nec pellentesque elementum. Fusce facilisis elit ultricies, bibendum
    velit eget, iaculis metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
    mus. Nulla dictum, mi sed blandit ultricies, urna sem imperdiet sapien, iaculis scelerisque purus turpis id
    orci. Proin ipsum libero, sagittis sit amet nisi quis, lacinia eleifend ipsum.</p>
    
    `);
});

router.on('/hello', function () {
    console.log('Hello!!!');
    staticContent(`
    
    <p>Phasellus non diam et risus blandit efficitur vitae non tellus. Maecenas vestibulum tristique erat, sit amet
    posuere tellus luctus sit amet. Pellentesque sed eros eleifend sapien dignissim sagittis a ut lorem. Curabitur
    nec risus enim. Nullam sed dolor vitae sem convallis auctor eu quis ipsum. Vivamus sed massa in diam commodo
    viverra vel et sapien. Maecenas porttitor mi a ornare ullamcorper. Sed convallis dui ut porttitor rutrum. In
    sagittis sapien hendrerit eros placerat molestie. Curabitur massa enim, blandit tempor scelerisque vehicula,
    congue at massa. Fusce posuere aliquet mauris eu blandit. Nunc vulputate euismod auctor.</p>
    
    `);
});

router.on('/test', function () {
    console.log('Test!!!');
    ajaxContent({ url: config.endpoints.test });
});

router.resolve();

export default router;