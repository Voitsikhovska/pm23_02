class Pier{
    constructor (id, port, maxShips){
        this.id = id;
        this.port = port;
        this.maxShips = maxShips;
        this.shipCollection = [];
        if(port === '' || port === undefined) this.port = "Невідомий порт";
        if(maxShips === '' || maxShips === undefined) this.maxShips = 5;
    }
}

var addPier = (port, maxShips) => {
    let pierArr = port.pierCollection;
    let pier = new Pier((pierArr.length) ? pierArr[pierArr.length-1].id + 1 : 1, port.name, maxShips);
    pierArr.push(pier);
    return pier;
}

var removePier = (port, pier) => {
    let pierArr = port.pierCollection;
    for (let index = 0; index < pierArr.length; index++)
        if(pierArr[index].id === pier.id) { pierArr.splice(pierArr.indexOf(pier), 1); return 1; }
    return -1;
}

var showPier = (port) => {
    let pierArr = port.pierCollection;
    console.log(`\nСписок усіх пристаней у порті ${port.name}:`);
    if(!pierArr.length) {
        console.log('Нема!');
        return pierArr;
    }
    for (let index = 0; index < pierArr.length; index++) {
        console.log(`Індекс пристані: ${pierArr[index].id} \t Максимальна місткість: ${pierArr[index].maxShips}`);
        console.log('Список кораблів на пристані: ');
        if(!pierArr[index].shipCollection.length) {
            console.log('Нема!');
            continue;
        }
        for (let j = 0; j < pierArr[index].shipCollection.length; j++) {
            console.log(`Індекс корабля: ${pierArr[index].shipCollection[j].id} \t Назва корабля: ${pierArr[index].shipCollection[j].name} \t
        Країна: ${pierArr[index].shipCollection[j].country} \t Тоннажність: ${pierArr[index].shipCollection[j].tonnage}`);
        }
    }
    return pierArr;
}

exports.addPier = addPier;
exports.removePier = removePier;
exports.showPier = showPier;