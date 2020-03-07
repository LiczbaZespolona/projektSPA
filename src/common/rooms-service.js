export const roomsService = {

    getRooms(){
        // pobiera liste wszystkich pokoi
        return fetch('http://localhost:8080/rooms')
        .then(response => response.json());
    },
    getRoom(id) {
        // pobiera jeden pokoj o zadanym id
        return fetch(`http://localhost:8080/rooms/${id}`)
        .then(response => response.json());
    }

}