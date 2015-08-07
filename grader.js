var Score = {
  letterGrader: function(score) {

    if(score > 89) {
      return "A";
    }

    if(score > 79 && score < 90) {
      return "B";
    }

    if(score > 69 && score < 80) {
      return "C";
    }

    if(score > 59 && score < 70) {
      return "D";
    }

    if(score < 60) {
      return "F";
    }

  }
}

module.exports = Score;
