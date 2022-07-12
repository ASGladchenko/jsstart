let _name = prompt('What is your name?');
let _birthDate = prompt('What year were you born ?');
console.log(` ${_name}  ${_birthDate}`);
confirm(`Hi, ${_name}. You were born in ${_birthDate}, right?`)
tmp = _name;
_name = _birthDate;
_birthDate = tmp;
console.log(` ${_name}  ${_birthDate}`);
confirm(`Hi, ${_name}. You were born in ${_birthDate}, right?`)