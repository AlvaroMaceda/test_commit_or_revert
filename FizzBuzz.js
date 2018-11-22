const FIZZ = 3;
const BUZZ = 5;

function checkFizz(n) {
  return (n % FIZZ === 0)
}

function checkBuzz(n) {
  return (n % BUZZ === 0)
}

function fizzbuzz(n) {
  if (checkFizz(n))
    return 'Fizz'

  if (checkBuzz(n))
    return 'Buzz'

  return n.toString();
}

module.exports = fizzbuzz;
