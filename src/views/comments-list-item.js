import $ from 'jquery';
import male from './../../image/male.png'
import female from './../../image/female.png'

export const commentsListItem = (comment) => {
    // let image = 'https://www.w3schools.com/bootstrap4/img_avatar3.png';
    let image = male;
    if (comment.sex === 'f') image = female;
    const media = $('<div class="media border rounded-lg m-2 p-3">'
        + `<img src="${image}" alt="${comment.name}" class="mr-3 mt-2 rounded-circle" style="width:60px;">`
        + '<div class="media-body">'
        + `<h4>${comment.name} <small><i>Posted on ${comment.date}</i></small></h4>`
        + `<p>${comment.comment}</p>`
        + '</div>'
        + `<i id="comment_${comment.id}" class="fas fa-thumbs-up fa-2x m-3"></i>`
        + '</div>');

    media.find('i').on('click', () => media.trigger("thumbs-up-click", { comment: comment.id }));

    return media;
};
