import $ from "jquery";

export const myScoreListItem = (room) => {
  const div = $("<div></div>");
  const li = $('<li class="list-group-item room-list-item"></li>');
  li.text(room.name);
  li.append(`<i id="room_${room.id}" class="fas fa-shopping-cart"></i>`);
  div.append(li);
  div.find("i").on("click", () => div.trigger("room-to-cart", { room: room.id }));
  return div;
};
