class Bus {
  constructor(routeNo, distance, destination) {
    this._routeNo = routeNo;
    this.distance = distance;
    this.destination = destination;
    this.passengers = [];
  };

  get routeNo() {
    return this._routeNo;
  }

  set routeNo(routeNo) {
    this._routeNo = routeNo;
  }

  drive() {
    this.distance += 10;
  };

  countPassengers() {
    return this.passengers.length;
  }

  addPassenger(person) {
    this.passengers.push(person);
  }

  dropPassenger() {
    this.passengers.pop();
  };

  empty() {
    this.passengers = [];
  };

  pickUpAll(busStop) {
    for (let passenger of busStop.queue) {
      this.passengers.push(passenger);
    }
    busStop.queue = [];
  };
};
/*============================================*/

// const Bus = function (routeNo, distance, destination) {
//   this.routeNo = routeNo;
//   this.distance = distance;
//   this.destination = destination;
//   this.passengers = [];
// };
//
// Bus.prototype.drive = function () {
//   this.distance += 10;
// };
//
// Bus.prototype.countPassengers = function () {
//   return this.passengers.length;
// }
//
// Bus.prototype.addPassenger = function (person) {
//   this.passengers.push(person);
// }
//
// Bus.prototype.dropPassenger = function () {
//   this.passengers.pop();
// };
//
// Bus.prototype.empty = function () {
//   this.passengers = [];
// };
//
// Bus.prototype.pickUpAll = function (busStop) {
//   for (let passenger of busStop.queue) {
//     this.passengers.push(passenger);
//   }
//   busStop.queue = [];
// };

module.exports = Bus;
