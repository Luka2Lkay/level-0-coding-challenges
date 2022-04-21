function vowelsInString(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const empty = [];

  const newStr = str.toLowerCase();

  for (let alphabet of newStr) {
    if (vowels.includes(alphabet)) {
      if (!empty.includes(alphabet)) {
        empty.push(alphabet);
      }
    }
  }

  const convertedList = empty.toString();
  return `Vowels: ${convertedList}`;
}
