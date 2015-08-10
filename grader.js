var score = {

letterGrader: function(grade) {
  if(grade > 89) {
    return "A";
  }
  if(grade > 79 && grade < 90) {
    return "B";
  }

  if(grade > 69 && grade < 80) {
    return "C";
  }

  if(grade > 59 && grade < 70) {
    return "D";
  }

  if(grade < 60) {
    return "F";
  }
},


averageScore: function(average) {
  var sum = 0;
    for (var i = 0; i < average.length; i++) {
      sum += average[i]
    } 
      return sum / average.length;
},

medianScore: function(median) {
  median.sort();
  var half = Math.floor(median.length / 2);

    if ((median.length / 2) % 2 === 0) {
      return (median[half]);
    }
    else if ((median.length /2) % 2 !== 0) {
      return (median[half -1] + median[half]) / 2;
    }
},

modeScore: function(mode) {
    var counter = {};
    var box = [];
    var max = 0;
      for (var i in mode) {
        if (!(mode[i] in counter))
          counter[mode[i]] = 0;
          counter[mode[i]]++;
 
        if (counter[mode[i]] == max) 
            box.push(mode[i]);
        else if (counter[mode[i]] > max) {
            max = counter[mode[i]];
            box = [mode[i]];
            var stringer = box.join();
        }
    }
    var int = parseInt(stringer);
    return int; 
}



}

module.exports = score;