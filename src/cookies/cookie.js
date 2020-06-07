export class Cookie {
  constructor(name) {
    this.cookieName = name; //Nazwa ciasteczka
  }
  cookie() {
    const cookies = document.cookie.split(";"); //ciąg tekstowy na tablica ciasteczek
    const myCookie = cookies.find((cookie) => cookie.startsWith(this.cookieName)); //moje ciasteczko z pozostałych
    return myCookie; //Zwraca ciasteczko lub undefined
  }

  exists() {
    return this.cookie() !== undefined;
  }

  get() {
    let parsedValue = "";
    if (this.exists()) {
      const myCookie = this.cookie();
      const myCookieValue = myCookie.split("=")[1]; //Ciąg znaków
      parsedValue = JSON.parse(myCookieValue); //JSON zmienia ciąg znaków na tablicę
    } else {
      this.set([]);
    }
    return parsedValue;
  }

  set(value) {
    const stringifiedValue = JSON.stringify(value);
    document.cookie = `${this.cookieName}=${stringifiedValue}`; //Aktualizacja wartości konkretnego cookiesa
  }

  empty() {
    //this.set([]);
    document.cookie = `${this.cookieName} =; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}
