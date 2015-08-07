var Score = require('../house');

describe('Score', function() {
  
  it('Returns an A letterGrader for a score between 90 and 100', function() {
    var score = new Score(93);
      expect(Score.letterGrader()).toEqual('A');
  });

  it('Returns a B letterGrader for a score between 80 and 89', function() {
    var score = new Score(87);
      expect(Score.letterGrader()).toEqual('B');
  });

  it('Returns a C letterGrader for a score between 70 and 79', function() {
    var score = new Score(73);
      expect(Score.letterGrader()).toEqual('C');
  });

  it('Returns a D letterGrader for a score between 60 and 69', function() {
    var score = new Score(66);
      expect(Score.letterGrader()).toEqual('D');
  });

  it('Returns an F letterGrader for a score below 60', function() {
    var score = new Score(59);
      expect(Score.letterGrader()).toEqual('F');
  });
}