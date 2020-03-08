import $ from 'jquery';

export const commentsListItem = (comment) => {
    let image = 'https://www.w3schools.com/bootstrap4/img_avatar3.png';
    if (comment.sex === 'f') image = 'https://www.w3schools.com/bootstrap4/img_avatar4.png';
    
    const media = $('<div class="media border rounded-lg m-2 p-3">'
        + `<img src="${image}" alt="${comment.name}" class="mr-3 mt-3 rounded-circle" style="width:60px;">`
        + '<div class="media-body">'
        + `<h4>${comment.name} <small><i>Posted on ${comment.date}</i></small></h4>`
        + `<p>${comment.comment}</p>`
        +'</div>'
        +'</div>');

    return media;
};