import $ from 'jquery';

export const commentsForm = () => {

    const form = $('<button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#demo">Wysuwany formularz do naprawy</button>'
        + '<div id="demo" class="collapse">'
        + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        + '</div>');


    return form;
};