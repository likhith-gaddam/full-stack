function vehicle(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
}
let car = new vehicle('GT', 'BMW', '1998cc');
console.log(car.name);
console.log(car.maker);
console.log(car['engine']);