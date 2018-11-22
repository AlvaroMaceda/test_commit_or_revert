const FIZZ = 3;

function checkFizz(n) {
  return (n % FIZZ === 0)
}

function fizzbuzz(n) {
  if(checkFizz(n))
    return 'Fizz'

  return n.toString();
}

module.exports = fizzbuzz;
