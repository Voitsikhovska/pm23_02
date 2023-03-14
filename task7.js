const mod = require('custom_modules');

var port1 = mod.addPort('San Francisco');
var port2 = mod.addPort('Lviv');
var port3 = mod.addPort();

mod.showPorts();

mod.removePort(port3.name);
mod.showPorts();

mod.editPort('San Francisco', 'Brody');
mod.showPorts();

var p1 = mod.findPorts('Brody');
console.log(`Пошук порту Lviv: ${(p1 !== -1 )?'знайдено':'не знайдено'}`);
var p2 = mod.findPorts('San Francisco');
console.log(`Пошук порту San Francisco: ${(p2 !== -1 )?'знайдено':'не знайдено'}`);


var ship1 = mod.addShip('Fortuna');
var ship2 = mod.addShip('Titanic');
var ship3 = mod.addShip();

mod.showShips();

mod.removeShip(ship2.name);
mod.showShips();

mod.editShip(ship3.name, 'Sos');
mod.showShips();

var s1 = mod.findShip('Sos');
console.log(`Пошук порту Sos: ${(s1 !== -1 )?'знайдено':'не знайдено'}`);
var s2 = mod.findShip('Titanic');
console.log(`Пошук порту San Francisco: ${(s2 !== -1 )?'знайдено':'не знайдено'}`);


var pier1 = mod.addPier(port1);
var pier2 = mod.addPier(port1);
var pier3 = mod.addPier(port1);
var pier4 = mod.addPier(port1);

mod.showPier(port1);
mod.showPorts();

mod.removePier(port1, pier3);
mod.showPier(port1);

mod.arriveShip(pier1, ship1);
mod.arriveShip(pier1, ship3);

mod.showPier(port1);

mod.departureShip(pier1, ship3);
mod.showPier(port1);