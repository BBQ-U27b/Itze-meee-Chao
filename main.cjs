const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main(wort) {
  const kleinschreiben = [];

  // Großbuchstaben werden ersetz durch Kleinbuchstabe
  for (let i = 0; i < wort.length; i++) {
    const zeichen = wort[i].toLowerCase();
    if (zeichen >= 'a' && zeichen <= 'z') {
      kleinschreiben.push(zeichen);
    }
  }

  // Überprüfe, ob das Wort von vorne und hinten gleich ist
  for (let i = 0; i < kleinschreiben.length / 2; i++) {
    if (kleinschreiben[i] !== kleinschreiben[kleinschreiben.length - 1 - i]) {
      return false;
    }
  }
  return true; // Wenn alle Zeichen übereinstimmen, ist es ein Palindrom
}


// Frage den Benutzer nach einem Wort
rl.question('Bitte geben Sie ein Wort ein: ', (eingabe) => {
  // Überprüfe, ob das Wort ein Palindrom ist
  if (main(eingabe)) {
    console.log( eingabe +  ' ist ein Palindrom.');
  } else {
    console.log( eingabe + ' ist kein Palindrom.');
  }

  // Schließe das Interface
  rl.close();
});
