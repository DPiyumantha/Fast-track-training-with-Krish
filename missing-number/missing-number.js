function findMissingNumber(arr) {
  arr = arr.filter((el) => !isNaN(el)).sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] != 1) {
      return arr[i] + 1;
    }
  }
  return [arr[0] - 1, arr[arr.length - 1] + 1];
}

function printMissingNumber(arr) {
  if (Array.isArray((res = findMissingNumber(arr))))
    return `You're missing ${res[0]} or ${res[1]}`;
  return `You're missing ${res}`;
}

module.exports = {printMissingNumber}