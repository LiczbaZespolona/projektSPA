export class Cart {

constructor(){
    this.key = 'IT_SPA_CART';   //Nazwa ciasteczka

    //cookieStore.addEventListener('change', (event)=>console.log(event));
}

cookie(){
    const cookies = document.cookie.split(';'); //ciąg tekstowy na tablica ciasteczek
    const itSpaCookie = cookies.find((cookie) => cookie.startsWith(this.key));  //moje ciasteczko z pozostałych
    return itSpaCookie; //Zwraca ciasteczko lub undefined
}

exists(){
    return this.cookie() !== undefined;
}

get(){
    if(this.exists()){
    const itSpaCookie = this.cookie();
    const cookieValue = itSpaCookie.split('=')[1];  //Ciąg znaków
    const parsedValue = JSON.parse(cookieValue);    //JSON zmienia ciąg znaków na tablicę
    } else {
    this.set([]);
    }
}

set(value){
    const stringifiedValue = JSON.stringify(value);
    document.cookie = `${this.key}=${stringifiedValue}`;    //Aktualizacja wartości konkretnego cookiesa
}

empty(){
    this.set([]);
}
}