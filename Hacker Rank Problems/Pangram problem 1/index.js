var findingPangram = (s) => {
  let allAlphabets = "abcdefghijklmnopqrstuvwxyz";
  let counter = 0;
  for (let index = 0; index < allAlphabets.length; index++) {
    for (let i = 0; i < s.length; i++) {
      if (allAlphabets[index].toLowerCase() === s[i].toLowerCase()) {
        counter++;
        break;
      }
    }
  }
  if (counter === 26) {
    return "pangram";
  } else {
    return "no pangram";
  }
};
console.log(
  findingPangram("We promptly judged antique ivory buckles for the prize")
);
