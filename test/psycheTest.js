var expect = require('chai').expect;
var Psyche = require('../lib/psyche');

describe("The Psyche", function(){
  it('should have correct properties', function() {
    var myMind = new Psyche('Brian','human connection', ['boredom', 'negativity']);
    expect(myMind).to.have.property('owner');
    expect(myMind.owner).to.equal('Brian');
    expect(myMind.cravings).to.equal('human connection');
    expect(myMind.aversions.length).to.equal(2);
  });

  it('should list all values for each key, then return the JSON', function() {
    var myMind = new Psyche('Brian','human connection', ['boredom', 'negativity']);
    expect(myMind.toString()).to.include('toString');
    expect(myMind.toString()).to.include('Brian');
  });
})
