class Ship_Pier{
    constructor(pier, ship){
        this.pier = pier;
        this.ship = ship;
        pier.shipCollection.push(ship);
    }
}

var arriveShip = (pier, ship) => {
    if(pier.shipCollection.length >= pier.maxShips) {console.log('All seats are taken.'); return -1;}
    new Ship_Pier(pier, ship);
    return 1;
}

var departureShip = (pier, ship) => {
    let id = pier.shipCollection.indexOf(ship);
    if (id===-1) return -1;
    pier.shipCollection.splice(id, 1);
    return 1;
}

var showShipsOnPier = (pier) => {
    let ships = pier.shipCollection;
    console.log("Список кораблів на пристані:");
    for (let index = 0; index < ships.length; index++) {
        console.log(`Індекс корабля: ${id} \t Назва корабля: ${ShipCollection[index].name} \t
        Країна: ${ShipCollection[index].country} \t Тоннажність: ${ShipCollection[index].tonnage}`);     
    }
    return ships;
}

exports.arriveShip = arriveShip;
exports.departureShip = departureShip;
exports.showShipsOnPier = showShipsOnPier;