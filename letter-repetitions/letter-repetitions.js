var { map } = require("methods");
const regex = /[^a-zA-Z\s\d]/g
function checkLetterRepetitions(sentence){
    sentence = sentence.replace(regex,'')
    arr=sentence.split('').filter(i=>i!=' ').map(i=>i.toLowerCase())
    arr.sort()
    map = new Map();
    arr.forEach(element => {
        map.has(element)?map.set(element,map.get(element)+1):map.set(element,1)
    });
    
    return map;
}

function checkWordRepetitions(sentence){
    sentence = sentence.replace(regex,'')
    arr=sentence.split(' ').filter(i=>i!='').map(i=>i.toLowerCase())
    arr.sort()
    map = new Map();
    arr.forEach(element => {
        map.has(element)?map.set(element,map.get(element)+1):map.set(element,1)
    });
    return map;
}

module.exports = {checkLetterRepetitions, checkWordRepetitions}
 