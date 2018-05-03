var namesFemale = ['Asia', 'Kasia', 'Ola', 'Jola'];
var	namesMale = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = namesFemale.concat(namesMale);
var	newName = 'Marian';

if (allNames.indexOf(newName) === -1)
{allNames.push(newName);
  console.log(allNames);
	
}
else { console.log("Imię istnieje");}