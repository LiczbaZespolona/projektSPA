import $ from "jquery";

export const navItem = (text, click) => {
  const navItem = $('<li class="nav-item mr-2"></li>');
  const anchor = $('<a class="btn btn-link btn-lg"></a>');
  anchor.text(text);
  anchor.on("click", click);
  //console.log(click)
  navItem.append(anchor); //podpięcie <a> pod <li>

  return navItem;
};
