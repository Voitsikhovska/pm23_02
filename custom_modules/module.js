const port = require('./port');
const ship = require('./ship');
const pier = require('./pier');
const ship_pier = require('./shipsAtThePier');

exports.getPortList = port.getPortList;
exports.setPortList = port.setPortList;
exports.addPort = port.addPort;
exports.getPortById = port.getPortById;
exports.findPorts = port.findPorts;
exports.removePort = port.removePort;
exports.editPort = port.editPort;
exports.showPorts = port.showPorts;

exports.getShipList = ship.getShipList;
exports.setShipList = ship.setShipList;
exports.addShip = ship.addShip;
exports.getShipById = ship.getShipById;
exports.findShip = ship.findShips;
exports.removeShip = ship.removeShip;
exports.editShip = ship.editShip;
exports.showShips = ship.showShips;

exports.addPier = pier.addPier;
exports.removePier = pier.removePier;
exports.showPier = pier.showPier;

exports.arriveShip = ship_pier.arriveShip;
exports.departureShip = ship_pier.departureShip;
exports.showShipsOnPier = ship_pier.showShipsOnPier;