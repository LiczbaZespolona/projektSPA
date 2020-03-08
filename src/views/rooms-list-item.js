import $ from 'jquery';

export const roomsListItem = (room) => {
    const div = $('<div></div>');
    const li = $('<li class="list-group-item room-list-item"></li>');
    li.text(room.name);
    div.append(li);
    div.append(`<i id="room_${room.id}" class="fas fa-shopping-cart"></i>`);
    div.find('i').on('click', () => div.trigger("room-to-cart", { room: room.id }));
    return div;
};
