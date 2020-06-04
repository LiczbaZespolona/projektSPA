import $ from "jquery";
import { roomsService } from "../common/rooms-service";
import { myScoreList } from "./myscore-list";

export const myScore = () => {
  const fragment = $(new DocumentFragment());

  return roomsService.getRooms().then((rooms) => {
    return fragment
      .append("<h2>Rooms</h2>")
      .append('<i class="glyphicon glyphicon-cloud"></i>')
      .append(myScoreList(rooms))
      .append("<p>Lorem ipsum dolor sit amte...</p>");
  });
};
