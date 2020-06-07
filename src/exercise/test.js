import { getDateTime } from "../common/time";

export class Test {
  constructor() {
    this.start = "";
    this.end = "";
    this.duration = 0;
    this.goodAnswers = 0;
    this.badAnswers = 0;
    this.exercises = [];
  }
  setStart() {
    this.start = getDateTime();
  }
  setEnd() {
    this.end = getDateTime();
  }
  setDuration(duration) {
    this.duration = duration;
  }
  setGoodAnswers(goodAnswers) {
    this.goodAnswers = goodAnswers;
  }
  setBadAnswers(badAnswers) {
    this.badAnswers = badAnswers;
  }
  addExercise(exercise) {
    this.exercises = this.exercises.concat(exercise);
  }
  empty() {
    this.setStart(0);
    this.setEnd(0);
    this.setDuration(0);
    this.setGoodAnswers(0);
    this.setBadAnswers(0);
    this.exercises = [];
  }
  getScore() {
    return {
      start: this.start,
      end: this.end,
      duration: this.duration,
      goodAnswers: this.goodAnswers,
      badAnswers: this.badAnswers,
      exercises: this.exercises,
    };
  }
}
