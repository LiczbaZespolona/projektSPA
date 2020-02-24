import $ from 'jquery';

export const oops = () => {
    const fragment = $(new DocumentFragment());

    fragment
        .append('<h2>404</h2>')
        .append('<p>Lorem ipsum dolor sit amte...</p>');

        return Promise.resolve(fragment);
}