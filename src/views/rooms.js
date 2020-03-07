import $ from 'jquery';
import { roomsService } from '../common/rooms-service';
import { roomsList } from './rooms-list';

export const rooms = () => {
    const fragment = $(new DocumentFragment());

    return roomsService.getRooms().then(pokoje=>{
        return fragment
        .append('<h2>Rooms</h2>')
        .append('<i class="fab fa-accessible-icon"></i>')
        .append(roomsList(pokoje))
        .append('<p>Lorem ipsum dolor sit amte...</p>');
    });

}
