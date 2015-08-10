var score = require('../grader.js');

  describe('methods', function() {
    describe('score', function() {
    it('uses the letterGrader argument as a property', function() {
      // var score = new score(100);

      expect(score.letterGrader(100)).toEqual('A');
    });

    it('Returns a B letterGrader for a score between 80 and 89', function() {
        expect(score.letterGrader(87)).toEqual('B');
    });

    it('Returns a C letterGrader for a score between 70 and 79', function() {

        expect(score.letterGrader(77)).toEqual('C');
    });

    it('Returns a D letterGrader for a score between 60 and 69', function() {
  
        expect(score.letterGrader(67)).toEqual('D');
    });

    it('Returns an F letterGrader for a score below 60', function() {
    
        expect(score.letterGrader(12)).toEqual('F');
    });
  }),

  describe('methods', function() {
    describe('averageScore', function() {

      it('Takes the grades in an array and returns the average grade', function() {
          expect(score.averageScore([76,89,53,100,96])).toEqual(82.8);
      });
    });
  }),

  describe('methods', function() {
    describe('medianScore', function() {

      it('Takes the grades of the students and finds the median', function() {
        expect(score.medianScore([52,80,80,86,94])).toEqual(80);
      });
    });
  }),

  describe('methods', function() {
    describe('modeScore', function() {

      it('Takes the grades of the students and finds the mode', function() {
        expect(score.modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])).toEqual(92);
      });
    });
  })
});