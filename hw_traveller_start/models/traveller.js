const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => journey.startLocation);

};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => journey.endLocation);

};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance >= minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((accumulator, journey) => accumulator + journey.distance,0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return [...new Set( this.journeys.map((journey) => journey.transport))];
  // function onlyUnique(value, index, self) {
  //   return self.indexOf(value) === index;
  // }
  // const unique = result.filter(onlyUnique)
  // const unique = [...new Set(result)];
  // return unique;
};


module.exports = Traveller;
