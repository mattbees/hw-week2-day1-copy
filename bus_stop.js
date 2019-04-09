// const BusStop = function (name) {
//   this.name = name;
//   this.queue = [];
// };
//
// BusStop.prototype.addToQueue = function (person) {
//   this.queue.push(person);
// };
//
//
//
// module.exports = BusStop;
//
//

/* ============= */



class BusStop {
  constructor(name) {
    this._name = name;
    this.queue = [];
  };

  addToQueue(person) {
    this.queue.push(person);
  };

  get name() {
    return this._name;
  };

  set name(newName) {
//    if (newName.typeOf() != String) {
      this._name = newName;
    // } else {
    //   console.log("Error");
//    }
  };
};


let stop = new BusStop('Leith Street');
console.log(stop.name);
stop.name = 4;


module.exports = BusStop;
