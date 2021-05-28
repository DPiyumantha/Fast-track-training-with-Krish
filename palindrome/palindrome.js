function isPalindrome(word) {
  const regex = /[^a-zA-Z\d]/;
  word = word.replace(regex, "").toLowerCase();
  let limit = Math.floor(word.length / 2);
  let isPalindrome = true;
  for (let i = 0; i < limit; i++) {
    if (word[i] !== word[word.length - i - 1]) {
      isPalindrome = false;
    }
  }
  return isPalindrome;
}

function printIsPalindrome(word) {
    if(isPalindrome(word))return `"${word}" is a palindrome.`
    return `"${word}" is not a palindrome.`
}

module.exports = {printIsPalindrome}