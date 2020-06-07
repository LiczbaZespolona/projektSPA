import $ from "jquery";
import { Test } from "./test";
import { fillWithZero } from "../common/time";
import { addUserScoreCookie } from "../cookies/scoreCookie";

var leftSecounds;
var myInterval;
var contestStarted = 0;
var userId = 0;
var testLength = 0;
var goodAnsware = 0;
var badAnsware = 0;
var name;
var level;

var answares = [];
var answare = {};

var cookiesOn = false;

var test = new Test();

export function start() {
  let time;
  leftSecounds = Math.floor($("#myInput").val() * 60);
  testLength = leftSecounds;
  contestStarted = 1;
  $("#btnStart").addClass("disabled");
  $("#btnNext").removeClass("disabled");
  $("#myInput").val(0);
  $("#btnNext").focus();
  $("#rachmistrz").html("Do boju!");
  $("#rachmistrz").unbind("click", showAnswares);
  answares = [];
  answare = {};
  goodAnsware = 0;
  badAnsware = 0;
  myInterval = setInterval(leftTime, 1000);
  test.empty();
  test.setStart();
  test.setDuration(leftSecounds);
  fillOperation();
  if (cookiesOn) {
    $.post("http://matma3.magusz.net/api/v0/remember.php", "user=" + name + "&level=" + level, function (data, status, result) {
      $("#rachmistrz").css("color", "red");
      //console.log(data);
      //alert("DAta: "+data+"\nRESPONSE:" + data.id );
      userId = data.id;
    });
  }
  return;
}

function leftTime() {
  leftSecounds--;
  $("#myTimer").html(Math.floor(leftSecounds / 60) + ":" + fillWithZero(leftSecounds - 60 * Math.floor(leftSecounds / 60)));
  if (leftSecounds <= 0) {
    clearInterval(myInterval);
    test.setEnd();
    test.setGoodAnswers(goodAnsware);
    test.setBadAnswers(badAnsware);
    // console.warn(test.getScore());
    addUserScoreCookie(test.getScore());
    $("#btnStart").removeClass("disabled");
    $("#btnNext").addClass("disabled");
    contestStarted = 0;
    if (userId > 0) {
      $("#rachmistrz").css("color", "blue");
      $.post("http://matma3.magusz.net/api/v0/result.php", "id=" + userId + "&tl=" + testLength + "&pos=" + goodAnsware + "&neg=" + badAnsware, function (
        data,
        status,
        result
      ) {
        $("#rachmistrz").css("color", "blue");
        // alert("Data: " + data + "\nStatus: "+ status + "\nResult: " + result);
      });
    }
    $("#rachmistrz").css("color", "green");
    alert("Czas minął!! Dobrych:" + goodAnsware + " i złych:" + badAnsware);
    $("#rachmistrz").html("RachMistrz (" + goodAnsware + "/" + (goodAnsware + badAnsware) + ") w " + testLength + " sek.");
    $("#rachmistrz").bind("click", showAnswares);
    goodAnsware = 0;
    badAnsware = 0;
    $("#myInput").val();
    $("#myDigit1").html("?");
    $("#myDigit2").html("?");
  }
  return;
}

function showAnswares() {
  let txt = "";
  answares.forEach((answare) => {
    if (answare.first * answare.secound == answare.answare) {
      txt = txt + '<span style="color:green;">' + answare.first + " x " + answare.secound + " = " + answare.answare + "</span></br>";
    } else {
      txt = txt + '<span style="color:red;">' + answare.first + " x " + answare.secound + " =<u> " + answare.answare + " </u></span></br>";
    }
  });
  $("#answaresList").html(txt);
  $("#answares").css("visibility", "visible");

  return;
}

export function digitPresed(digit) {
  if (digit != "Dot" && digit != "Back") {
    if ($("#myInput").val() == "0") $("#myInput").val(digit);
    else $("#myInput").val($("#myInput").val().toString() + digit);
  } else if (digit == "Dot") {
    $("#myInput").val($("#myInput").val() + ".");
  } else {
    $("#myInput").val(
      $("#myInput")
        .val()
        .toString()
        .substring(0, $("#myInput").val().toString().length - 1)
    );
    if ($("#myInput").val().toString().length == 0) $("#myInput").val(0);
  }
  return;
}

export function keyPressed(event) {
  // console.log(event);
  let x = event.which || event.keyCode;
  if (x >= 48 && x <= 57) digitPresed(x - 48);
  else if (x == 44) digitPresed("Dot");
  else if (x == 8) {
    digitPresed("Back");
    event.preventDefault();
  } else if (x == 13 && contestStarted == 1) next();
  else if (x == 13 && contestStarted == 0) start();
  return;
}

export function init() {
  // console.warn("Init()");
  $("#myInput").val(5);
  $("#myInput").focus();
  // $(document).bind("keydown keypress", (event) => {
  $(document).bind("keypress", (event) => {
    let rx = /INPUT|SELECT|TEXTAREA/i;
    if (!rx.test(event.target.tagName) || event.target.disabled || event.target.readOnly) keyPressed(event);
  });
  return;
}

export function next() {
  checkResult();
  fillOperation();
  $("#myInput").val(0);
  $("#btnNext").focus();
  return;
}

function fillOperation() {
  let firstDigit = Math.floor(Math.random() * 9 + 2);
  let secoundDigit = Math.floor(Math.random() * (10 - firstDigit + 2) + firstDigit - 2);
  if (Math.random() < 0.5) {
    let buf = firstDigit;
    firstDigit = secoundDigit;
    secoundDigit = buf;
  }
  $("#myDigit1").html(firstDigit);
  $("#myOperator").html("&#8901;");
  $("#myDigit2").html(secoundDigit);
  return;
}

function checkResult() {
  if (contestStarted) {
    let digit1 = $("#myDigit1").html();
    let digit2 = $("#myDigit2").html();
    let result = $("#myInput").val();

    test.addExercise([{ a: digit1, b: digit2, answer: result }]);

    if (result == digit1 * digit2) goodAnsware++;
    else badAnsware++;
    answare = { first: digit1, secound: digit2, answare: result };
    answares.push(answare);
    //console.log(result+ " "+(digit1*digit2)+" "+goodAnsware+" "+badAnsware);
  }
  return;
}

function saveCookie(event) {
  event.preventDefault();

  name = document.getElementById("name").value;
  level = document.getElementById("level").value.toString().toUpperCase();

  if (name.length == 0 || level.length == 0) return;

  if (cookiesOn) {
    clearCookie("name");
    clearCookie("level");

    document.getElementById("name").disabled = false;
    document.getElementById("level").disabled = false;
    document.getElementById("name").value = "";
    document.getElementById("level").value = "";

    $("#rememberMe").removeClass("btn-danger").addClass("btn-success").text("Zapamiętaj");
    $("#rachmistrz").css("color", "grey");
    $("#rachmistrz").html("Rachmistrz");
    userId = 0;
    cookiesOn = false;
  } else {
    setCookie("name", name, 45);
    setCookie("level", level, 45);

    document.getElementById("name").disabled = true;
    document.getElementById("level").disabled = true;

    $("#rememberMe").removeClass("btn-success").addClass("btn-danger").text("Zapomnij");
    $("#rachmistrz").css("color", "yellow");

    cookiesOn = true;
  }
}
