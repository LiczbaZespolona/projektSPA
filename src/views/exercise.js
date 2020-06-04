import $ from "jquery";
import { exerciseButton } from "./exercise-button";

export const exercise = () => {
  const section = $("<section></section>");
  const content = $('<div class="exerciseContent"></div>');
  content.append('<h4 id="myTimer" class="text-center">Podaj czas testu.</h4>');

  const operation = $('<div id="myOperation" style="text-align: center;"><div id="wraper"></div></div>');
  operation
    .append('<h2 id="myDigit1" class="text-center operation">?</h2>')
    .append('<h2 id="myOperator" class="text-center operation">&#8901;</h2>')
    .append('<h2 id="myDigit2" class="text-center operation">?</h2>');
  content.append(operation);

  content.append('<div id="myText"></div>');

  content
    .append('<p><input type="text" placeholder="wpisz czas w minutach" class="input-lg form-control blockquote-reverse" disabled id="myInput"></p>')
    .append('<p><a class="btn btn-info btn-block" role="button" id="btnStart" onClick="start()">Start</a></p>')
    .append('<p><a class="btn btn-success btn-block disabled" role="button" id="btnNext" onclick="next()">Następne</a></p>');

  const digits = $('<div id="digits" style="text-align: center; width:200px;margin-left: auto; margin-right: auto;"></div>');
  digits.append(exerciseButton(7)).append(exerciseButton(8)).append(exerciseButton(9)).append('<div style="clear:both;min-height: 5px;"></div>');
  digits.append(exerciseButton(4)).append(exerciseButton(5)).append(exerciseButton(6)).append('<div style="clear:both;min-height: 5px;"></div>');
  digits.append(exerciseButton(1)).append(exerciseButton(2)).append(exerciseButton(3)).append('<div style="clear:both;min-height: 5px;"></div>');
  digits
    .append(exerciseButton(0))
    .append(exerciseButton("dot").html("."))
    .append(exerciseButton("back").html("&#8617"))
    .append('<div style="clear:both;min-height: 5px;"></div>');
  content.append(digits);
  section.append(content);
  return Promise.resolve(section);

  function digitPresed(digit) {
    if (digit != "dot" && digit != "back") {
      if ($("#myInput").val() == "0") $("#myInput").val(digit);
      else $("#myInput").val($("#myInput").val().toString() + digit);
    } else if (digit == "dot") {
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
};
