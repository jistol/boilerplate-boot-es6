'use strict';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

let links = [
    {'name' : 'React & Sass Sample', 'link' : '/react'}
];

$(document).ready(() => {
    console.log('trigger document ready!!!');

    let $lk = $('#link');
    links.forEach(link => {
        let a = $('<a/>')
                    .attr('href', link.link)
                    .text(link.name)
                    .addClass('list-group-item');
        $lk.append(a);
    });
});

