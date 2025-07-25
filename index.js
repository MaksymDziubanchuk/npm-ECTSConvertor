class ECTS {
  constructor(score) {
    this.score = score;
  }

  ectsFromScore() {
    const value = Number(this.score);
    if (Number.isNaN(value)) {
      throw new Error("Invalid score");
    }
    if (value < 0 || value > 100) {
      throw new Error("Invalid diapazone");
    } else if (value < 60) {
      return "F";
    } else if (value < 65) {
      return "E";
    } else if (value < 74) {
      return "D";
    } else if (value < 82) {
      return "C";
    } else if (value < 90) {
      return "B";
    } else {
      return "A";
    }
  }
}

module.exports = ECTS;
