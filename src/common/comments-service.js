export const commentsService = {
    getComments(){
        //komentarze klientów
        return fetch ('http://localhost:8080/comments')
            .then(response => response.json());
    }
}