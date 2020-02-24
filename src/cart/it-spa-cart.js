import { Cart } from "./cart"

export const itSpaCart = () => {
    const cart = new Cart();
    const fragment = $(new DocumentFragment());

    cookieStore.addEventListener('click', (event) => {
        const nowaZawartosc = cart.get();
        // Jeśli zmieni się zawartość koszyka to aktualizujemy wartość ikonki przy koszyku
    });
    fragment
    .append('<span>koszyk</span>')

    return fragment;
}

