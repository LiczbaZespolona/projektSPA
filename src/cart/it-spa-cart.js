import $ from 'jquery';  // Import referencji "$" z pakietu jquery
import { Cart } from "./cart"

export const itSpaCart = () => {
    const cart = new Cart();
    const fragment = $(new DocumentFragment());

    // cookieStore.addEventListener('click', (event) => {
    //     const nowaZawartosc = cart.get();
    //     // Jeśli zmieni się zawartość koszyka to aktualizujemy wartość ikonki przy koszyku
    //     console.log(nowaZawartosc);
    // });
    fragment
        .append('<span id="basket">Pusty koszyk</span>')
        .find('#basket').text(cart.get());

    // Nasłuchiwanie zdarzenia thumbs up od komentarza
    $(document.body).on("thumbs-up-click", (event, detail) => {
        //console.log(event);
        //console.warn(detail);
        $('#basket').text("klik od " + detail.comment);
    })
    $(document.body).on("room-to-cart", (event, detail) => {
        //console.log(event);
        //console.warn(detail);
        $('#basket').text($('#basket').text() + " room: " + detail.room);
        cart.set($('#basket').text())
    })

    return fragment;
}

