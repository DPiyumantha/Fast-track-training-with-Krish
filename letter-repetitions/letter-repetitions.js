function checkLetterRepetitions(sentence){
    arr=sentence.split('').filter(i=>i!=' ').map(i=>i.toLowerCase())
    map = new Map();
    arr.forEach(element => {
        map.has(element)?map.set(element,map.get(element)+1):map.set(element,1)
    });
    console.log(`Number of letter repetitions in "${sentence}"`);
    console.table(map)
}

function checkWordRepetitions(sentence){
    arr=sentence.split(' ').filter(i=>i!='').map(i=>i.toLowerCase())
    map = new Map();
    arr.forEach(element => {
        map.has(element)?map.set(element,map.get(element)+1):map.set(element,1)
    });
    console.log(`Number of word repetitions in "${sentence}"`);
    console.table(map)
}


checkLetterRepetitions(" i love sri lanka")
checkWordRepetitions("The first second was alright but the second second was tough")
