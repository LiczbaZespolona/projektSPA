import $ from "jquery";

export const navItem = (text, path, click) => {
  const navItem = $(`<li id="navItem_${path.slice(1)}"class="nav-item mr-2"></li>`);
  const anchor = $('<a class="btn btn-link "></a>');
  anchor.text(text);
  anchor.on("click", click);
  //console.log(click)
  navItem.append(anchor); //podpięcie <a> pod <li>

  return navItem;
};
