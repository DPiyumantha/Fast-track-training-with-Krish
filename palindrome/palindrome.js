function isPalindrome(word) {
  const regex = /[^a-zA-Z\d]/g;
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
  isPalindrome(word)
    ? console.log(`"${word}" is a palindrome.`)
    : console.log(`"${word}" is not a palindrome.`);
}

printIsPalindrome("Mad*am");
printIsPalindrome("Top spot!");
printIsPalindrome("Never a foot too far, even");
printIsPalindrome("Javascript");
printIsPalindrome("Java");