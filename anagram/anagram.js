function isAnagram(word1, word2){
    arr1 = word1.split('').map(el=>el.toLowerCase());
    arr2 = word2.split('').map(el=>el.toLowerCase());
    var isAnagram = true;
    if(arr1.length!=arr2.length){
        return false;
    }else{
        for(let i=0; i<arr2.length;i++){
            let pos = arr1.findIndex(el=>el===arr2[i])
            if(pos>=0){
                arr1.splice(pos,1)
            }else{
                isAnagram=false;
            }
        }
        return isAnagram;
    }
}

function printIsAnagram(word1,word2){
    isAnagram(word1,word2)?console.log(`${word1} and ${word2} are anagrams.`)
    :console.log(`${word1} and ${word2} are not anagrams.`)
}

printIsAnagram("Stressed", "Desserts")
printIsAnagram("can", "cant")
printIsAnagram("can", "car")
printIsAnagram("rat", "tar")

