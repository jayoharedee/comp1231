function Bus(num, route, direction) {
  this.num = num
  this.route = route
  this.direction = direction
  this.numOfPassengers = Math.floor(Math.random() * 50)
  this.getInfo = function() {
    return `${this.num} , ${this.route} etc...`
  }
}

const bus1 = new Bus(18, 'Dundas West', 'South')
console.log(bus1.getInfo())
// const ptag1 = document.getElementById('1')
// ptag1.innerHTML = bus1.getInfo()