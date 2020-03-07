import $ from 'jquery';
import { roomsListItem } from './rooms-list-item';

export const roomsList = (rooms) => {
  const ul = $('<ul class="list-group room-list"></ul>');

  // doczepia liste pokoi, gdy tylko przyjdzie z serwera
  rooms.map(room => roomsListItem(room))
    .map(roomsListItems => ul.append(roomsListItems));

  return ul;
};
