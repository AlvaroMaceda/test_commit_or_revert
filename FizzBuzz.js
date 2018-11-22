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

function toString(n){
  return n.toString()
}

function PEPE(n,...args){
  return args.map(f => f(n)).find(result => result !== false)

  args.find((item)=>item(n));
}

function fizzbuzz (n) {
  return PEPE(n, fizz, buzz, toString);
}

module.exports = fizzbuzz;
