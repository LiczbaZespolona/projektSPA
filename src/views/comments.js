import $ from 'jquery';
import { commentsService } from '../common/comments-service';
import { commentsList } from './comments-list';


export const comments = () => {
    const fragment = $(new DocumentFragment());

    return commentsService.getComments().then(comments => {
        return fragment
        .append('<h2>Comments</h2>')
        .append(commentsList(comments))
        .append('<p>Add comment.<a>');
    })
}
