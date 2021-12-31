// Get the file system module so we can read files
const fs = require('fs');

// Read data from item.json file
let rawdata = fs.readFileSync('item.json');
let itemData = JSON.parse(rawdata);

// Get item data
let items = itemData['data'];

// Get all the keys/ids for each item
let keys = Object.keys(items);
let nameToKeyMap = { };

// Build nameToKeyMap so we can find items based on their name
keys.forEach(k => {
    let name = items[k]['name'];
    nameToKeyMap[name] = k;
})

// Fetches an item based on name, e.g. Eclipse
function fetchItem(name) {
    return items[nameToKeyMap[name]]
}

console.log(fetchItem("Eclipse"))
