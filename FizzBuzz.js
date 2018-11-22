const FIZZ = 3;
const BUZZ = 5;

function checkFizz(n) {
  return (n % FIZZ === 0)
}

function checkBuzz(n) {
  return (n % BUZZ === 0)
}

function fizz(n){
  if (checkFizz(n))
    return 'Fizz'

  return false
}

function buzz(n){
  if (checkBuzz(n))
    return 'Buzz'

  return false
}

function fizzBuzz(n){
  if (checkBuzz(n) && checkFizz(n))
    return 'FizzBuzz'

  return false
}

function identity(n){
  return n
}

function toString(n){
  return n.toString()
}

function fizzBuzzBuilder(...args){
  return (n) => args.map(f => f(n)).find(result => result !== false)
}

const PEPE = fizzBuzzBuilder(fizzBuzz, fizz, buzz, identity)

function ramon(n){
  return toString(PEPE(n));
}

module.exports = ramon
