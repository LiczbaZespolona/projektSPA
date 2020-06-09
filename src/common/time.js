import $ from "jquery";

export const fillWithZero = (n) => {
  let ret = "00";
  if (n < 10) ret = "0" + n;
  else ret = n;
  return ret;
};

export function getDateTime() {
  const date = new Date();
  const dateString =
    date.getFullYear() +
    "-" +
    fillWithZero(date.getMonth() + 1) +
    "-" +
    fillWithZero(date.getDate()) +
    " " +
    fillWithZero(date.getHours()) +
    ":" +
    fillWithZero(date.getMinutes()) +
    ":" +
    fillWithZero(date.getSeconds());
  return dateString;
}
export const getData = () => {
  const date = new Date();
  const dateString = date.getFullYear() + "-" + fillWithZero(date.getMonth() + 1) + "-" + fillWithZero(date.getDate());
  return dateString;
};
export const getTime = () => {
  const date = new Date();
  const dateString = fillWithZero(date.getHours()) + ":" + fillWithZero(date.getMinutes()) + ":" + fillWithZero(date.getSeconds());
  return dateString;
};
