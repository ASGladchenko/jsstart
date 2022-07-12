let _name = prompt('What is your name?');
let _age = prompt('How old are you?');
console.log(` ${_name}  ${_age} years old`);

tmp = _name;
_name = _age;
_age = tmp;
console.log(` ${_name}  ${_age} years old`);