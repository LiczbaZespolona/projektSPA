import $ from "jquery";
import { exerciseButton, exerciseBigButton } from "./exercise-button";

export const exercise = () => {
  const section = $("<section></section>");
  const content = $('<div class="exerciseContent"></div>');
  content.append('<h5 id="myTimer" class="text-center">Podaj czas testu.</h5>');

  const operation = $('<div id="myOperation" style="text-align: center;"><div id="wraper"></div></div>');
  operation
    .append('<h2 id="myDigit1" class="text-center operation">?</h2>')
    .append('<h2 id="myOperator" class="text-center operation">&#8901;</h2>')
    .append('<h2 id="myDigit2" class="text-center operation">?</h2>');
  content.append(operation);

  content.append('<div id="myText"></div>');

  content
    .append('<p><input type="text" placeholder="wpisz czas w minutach" class="input-lg form-control blockquote-reverse" disabled id="myInput"></p>')
    .append(exerciseBigButton("Start", "startPresed").text("Start"))
    .append(exerciseBigButton("Next", "nextPresed").text("Następne").addClass("disabled"));

  const digits = $('<div id="digits" style="text-align: center; width:200px;margin-left: auto; margin-right: auto;"></div>');
  digits.append(exerciseButton(7)).append(exerciseButton(8)).append(exerciseButton(9)).append('<div style="clear:both;min-height: 5px;"></div>');
  digits.append(exerciseButton(4)).append(exerciseButton(5)).append(exerciseButton(6)).append('<div style="clear:both;min-height: 5px;"></div>');
  digits.append(exerciseButton(1)).append(exerciseButton(2)).append(exerciseButton(3)).append('<div style="clear:both;min-height: 5px;"></div>');
  digits
    .append(exerciseButton(0))
    .append(exerciseButton("Dot").html("."))
    .append(exerciseButton("Back").html("&#8617"))
    .append('<div style="clear:both;min-height: 5px;"></div>');
  content.append(digits);
  section.append(content);
  section.on("keydown", () => anchor.trigger("keyPresed", {}));
  // section.on("load", () => anchor.trigger("exerciseLoaded", {}));
  return Promise.resolve(section);
};
