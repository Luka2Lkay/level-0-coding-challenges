const vowels = ["a", "e", "i", "o", "u"];

function vowelsInString(str) {
  const empty = [];

  let newStr = str.toLowerCase();

  for (let alphabet of newStr) {
    if (vowels.includes(alphabet)) {
      if (!empty.includes(alphabet)) {
        empty.push(alphabet);
      }
    }
  }

  const convertedList = empty.toString();
  console.log(`Vowels: ${convertedList}`);
}
