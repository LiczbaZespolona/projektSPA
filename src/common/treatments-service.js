export const treatmentsService = {
    getTreatments(){
        //pobranie listy zabiegów
        return fetch('http://localhost:8080/treatments')
            .then(response => response.json());
    },
    getTreatment(id){
        //pobranie jednego konkretnego zabiegu
        return fetch(`httpd://localhost:8080/treatments/${id}`)
            .then(response => response.json());
    }
}