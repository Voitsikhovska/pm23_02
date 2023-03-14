var portCollection = new Array();
var lastPortId = 0;

class Port {
    constructor(name, country, address, id) {
        this.name = name;
        this.country = country;
        this.address = address;
        this.id = id;
        this.pierCollection = [];
        if (name === '' || name === undefined) this.name = "Невідома назва";
        if (country === '' || country === undefined) this.country = "Невідома країна";
        if (address === '' || address === undefined) this.address = "Невідома адреса";
        if (id === '' || id === undefined) this.id = ++lastPortId;
    }
}

var getPortList = () => { return portCollection; }


var setPortList = (data) => {

    if (!data || data.length < 1) { return; }

    for (let element of data) {
        addPort(element.name,
            element.country,
            element.address,
            element.id);
    }
}

var addPort = (name, country, address, id) => {
    let port = new Port(name, country, address, id);
    portCollection.push(port);
    return port;
}

var getPortById = (id) => {
    for (let index = 0; index < portCollection.length; index++)
        if (portCollection[index].id === id) return portCollection[index];
    return -1;
}

var findPorts = (search) => {
    let result = [];
    search = search.toLowerCase();
    for (let port of portCollection) {

        let attributes = [port.name,
        port.country,
        port.address];

        for (let attr of attributes) {

            if (attr.toLowerCase().includes(search)) {
                result.push(port);
                break;
            }
        }
    }
    return result;
}

var editPort = (newName, newCountry, newAddress, id) => {
    let port = getPortById(id);
    if (port === -1) return -1;
    port.name = (newName === '' || newName === undefined) ? port.name : newName;
    port.country = (newCountry === '' || newCountry === undefined) ? port.country : newCountry;
    port.address = (newAddress === '' || newAddress === undefined) ? port.address : newAddress;
    return 1;
}

var removePort = (id) => {
    let port = getPortById(id);
    if (port === -1) return -1;
    let index = portCollection.indexOf(port);
    portCollection.splice(index, 1);
    return 1;
}

var showPorts = () => {
    console.log("\nСписок усіх портів:");
    for (let index = 0; index < portCollection.length; index++) {
        console.log(`Індекс порту: ${portCollection[index].id} \t Назва порту: ${portCollection[index].name} \t 
        Країна: ${portCollection[index].country} \t Адреса: ${portCollection[index].address} \t
        Кількість пристаней: ${portCollection[index].pierCollection.length}`);
    }
    return portCollection;
}

exports.getPortById = getPortById;
exports.addPort = addPort;
exports.removePort = removePort;
exports.editPort = editPort;
exports.showPorts = showPorts;
exports.findPorts = findPorts;
exports.getPortList = getPortList;
exports.setPortList = setPortList;