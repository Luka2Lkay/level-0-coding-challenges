function toFahrenheit(celsius) {
  const temperature = (celsius * 9) / 5 + 32;

  return temperature;
}

function toCelsius(fahrenheit) {
  const temperature = ((fahrenheit - 32) * 5) / 9;

  return temperature;
}
