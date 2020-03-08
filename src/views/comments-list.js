import $ from 'jquery';
import { commentsListItem} from './comments-list-item';

export const commentsList = (comments) => {
  const div = $('<div class="comments-group"></div>');
  
  comments.map(comment => commentsListItem(comment))
  .map(commentsListItems => div.append(commentsListItems));

  return div;
}
