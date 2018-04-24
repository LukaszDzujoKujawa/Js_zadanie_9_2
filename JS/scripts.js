var namesFemale = ['Asia', 'Kasia', 'Ola', 'Jola'];
var namesMale = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var namesAll = namesFemale.concat(namesMale);

var newName = 'Marian';
if (namesAll.includes(newName) === false) {
  return namesAll.push(newName);     
}

if (namesAll.indexOf(nameNew) === -1) {
  namesAll.push(nameNew);
}