import $ from 'jquery';
import { commentsService } from '../common/comments-service';
import { commentsList } from './comments-list';
import { commentsForm } from './commants-form';


export const comments = () => {
    const fragment = $(new DocumentFragment());

    return commentsService.getComments().then(comments => {
        return fragment
        .append('<h2>Comments</h2>')
        .append(commentsList(comments))
        .append(commentsForm());
    })
}
