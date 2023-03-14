var ShipCollection = new Array();
var lastShipId = 0;

class Ship {
    constructor(name, country, tonnage, id) {
        this.name = name;
        this.country = country;
        this.tonnage = tonnage;
        this.id = id;
        this.pier_collection = [];
        if (name === '' || name === undefined) this.name = "Невідома назва";
        if (country === '' || country === undefined) this.country = "Невідома країна";
        if (tonnage === '' || tonnage === undefined) this.tonnage = "Невідома тоннажність";
        if (id === '' || id === undefined) this.id = ++lastShipId;
    }
}

var getShipList = () => { return ShipCollection; }


var setShipList = (data) => {

    if (!data || data.length < 1) { return; }

    for (let element of data) {
        addShip(element.name,
            element.country,
            element.tonnage,
            element.id);
    }
}

var addShip = (name, country, tonnage, id) => {
    let ship = new Ship(name, country, tonnage, id);
    ShipCollection.push(ship);
    return ship;
}

var getShipById = (id) => {
    for (let index = 0; index < ShipCollection.length; index++)
        if (ShipCollection[index].id === id) return ShipCollection[index];
    return -1;
}

var findShips = (search) => {
    let result = [];
    search = search.toLowerCase();
    for (let ship of ShipCollection) {

        let attributes = [ship.name,
        ship.country,
        ship.tonnage];

        for (let attr of attributes) {

            if (attr.toLowerCase().includes(search)) {
                result.push(ship);
                break;
            }
        }
    }
    return result;
}

var editShip = (newName, newCountry, newTonnage, id) => {
    let ship = getShipById(id);
    if (ship === -1) return -1;
    ship.name = (newName === '' || newName === undefined) ? ship.name : newName;
    ship.country = (newCountry === '' || newCountry === undefined) ? ship.country : newCountry;
    ship.tonnage = (newTonnage === '' || newTonnage === undefined) ? ship.tonnage : newTonnage;
    return 1;
}

var removeShip = (id) => {
    let ship = getShipById(id);
    if (ship === -1) return -1;
    let index = ShipCollection.indexOf(ship);
    ShipCollection.splice(index, 1);
    return 1;
}

var showShips = () => {
    console.log("\nСписок усіх кораблів:");
    for (let index = 0; index < ShipCollection.length; index++) {
        console.log(`Індекс корабля: ${ShipCollection[index].id} \t Назва корабля: ${ShipCollection[index].name} \t
        Країна: ${ShipCollection[index].country} \t Тоннажність: ${ShipCollection[index].tonnage}`);
    }
    return ShipCollection;
}

exports.getShipById = getShipById;
exports.addShip = addShip;
exports.removeShip = removeShip;
exports.editShip = editShip;
exports.showShips = showShips;
exports.findShips = findShips;
exports.getShipList = getShipList;
exports.setShipList = setShipList;