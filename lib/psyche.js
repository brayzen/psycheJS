var Psyche = function(owner, cravings, aversions){
  this.owner = owner;
  this.cravings = cravings;
  this.aversions = aversions;
}

Psyche.prototype.toString = function(){
  string = "";
  for(var prop in this){
    string += (prop + ": " + this[prop]+ ', ');
  }
  return string;
}

module.exports = Psyche;
