const convertToCelsius = function(farenheit) {
  return round((farenheit - 32) * (5 / 9));
};

const convertToFahrenheit = function(temp) {
  return round(temp * (9 / 5) + 32);
};

function round(num) {
  // rounds to 1 decimal (shifts decimal over 1 to the right, rounds to whole number, then shifts decimal back
  // to the left to get 1 decimal place)
  return Math.round(num * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
