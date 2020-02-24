import $ from 'jquery';

export const navItem = (text, click) => {
    const navItem = $('<li class="nav-item"></li>');
    const anchor = $('<a class="btn btn-link text-light"></a>');
    anchor.text(text);
    anchor.on('click', click);
    //console.log(click)
    navItem.append(anchor); //podpięcie <a> pod <li>

    return navItem;
}


