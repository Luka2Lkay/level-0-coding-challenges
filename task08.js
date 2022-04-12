function timeConvertor(time) {
  let hours = Math.floor(time / 60);
  let minutes = time % 60;

  if ((hours === 1) & (minutes === 1)) {
    console.log(`${hours} hour, ${minutes} minute`);
  } else if ((hours >= 0) & (minutes === 1)) {
    console.log(`${hours} hours, ${minutes} minute`);
  } else if ((hours === 1) & (minutes >= 0)) {
    console.log(`${hours} hour, ${minutes} minutes`);
  } else {
    console.log(`${hours} hours, ${minutes} minutes`);
  }
}
