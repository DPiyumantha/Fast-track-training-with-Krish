function isAnagram(word1, word2) {
  arr1 = word1.split("").map((el) => el.toLowerCase());
  arr2 = word2.split("").map((el) => el.toLowerCase());
  var isAnagram = true;
  if (arr1.length != arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr2.length; i++) {
      let pos = arr1.findIndex((el) => el === arr2[i]);
      if (pos >= 0) {
        arr1.splice(pos, 1);
      } else {
        isAnagram = false;
      }
    }
    return isAnagram;
  }
}

function isAnagramRec(word1, word2) {
  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();
  if (
    word1.split("").length == 1 &&
    word2.split("").length == 1 &&
    word1 === word2
  ) {
    return true;
  }

  arr = word2.split("");
  arr2 = word1.split("");
  pos = arr.findIndex((el) => el === arr2[0]);
  if (pos >= 0) {
    return isAnagramRec(word1.substring(1), word2.replace(word2[pos], ""));
  } else {
    return false;
  }
}

function printIsAnagram(word1, word2) {
  isAnagramRec(word1, word2)
    ? console.log(`Using Recursion >>> ${word1} and ${word2} are anagrams.`)
    : console.log(`Using Recursion >>> ${word1} and ${word2} are not anagrams.`);
    isAnagram(word1, word2)
    ? console.log(`Using Iteration >>> ${word1} and ${word2} are anagrams.`)
    : console.log(`Using Iteration >>> ${word1} and ${word2} are not anagrams.`);
}


printIsAnagram("Stressed", "Desserts")
printIsAnagram("can", "cant")
printIsAnagram("can", "car")
printIsAnagram("rat", "tar")


