import $ from 'jquery';

export const home = () => {
    const fragment = $(new DocumentFragment());

    fragment
        .append('<h2>Home</h2>')
        .append('<p>Lorem ipsum dolor sit amte...</p>');






    return Promise.resolve(fragment);
}