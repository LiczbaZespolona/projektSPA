import $ from 'jquery';
import { roomsService } from '../common/rooms-service';

export const rooms = () => {
    const fragment = $(new DocumentFragment());

    return roomsService.getRooms().then(pokoje=>{
        return fragment
        .append('<h2>Rooms</h2>')
        .append('<i class="fab fa-accessible-icon"></i>')
        .append(`Pokoj: ${pokoje[1].name}`)
        .append('<p>Lorem ipsum dolor sit amte...</p>');
    });

}