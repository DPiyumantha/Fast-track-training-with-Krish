var { map } = require("methods");

function checkLetterRepetitions(sentence){
    arr=sentence.split('').filter(i=>i!=' ').map(i=>i.toLowerCase())
    map = new Map();
    arr.forEach(element => {
        map.has(element)?map.set(element,map.get(element)+1):map.set(element,1)
    });
    return map;
}

function checkWordRepetitions(sentence){
    console.log(sentence)
    arr=sentence.split(' ').filter(i=>i!='').map(i=>i.toLowerCase())
    map = new Map();
    arr.forEach(element => {
        map.has(element)?map.set(element,map.get(element)+1):map.set(element,1)
    });
    return map;
}

module.exports = {checkLetterRepetitions, checkWordRepetitions}
 