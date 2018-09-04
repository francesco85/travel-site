/*l'ideale, lavorando con gli oggetti, sarebbe organizzare il codice separatamente in diversi file.
Questo non si può fare con js ma possiamo utilizzare un package di nome webpack che riunisce il contenuto di più file in uno solo, permettendo così di lavorare su file separati.
Per prima cosa si deve creare un file nella cartella del progetto (root folder) che abbia un nome specifico: webpack.config.js
Questo file dovrà specificare cosa il nostro webpack andrà a fare!
Creiamo oggetto definendo proprietà entry che specifica il file da cui webpack dovrà partire per il bundle
Poi dobbiamo specificare in quale file webpack dovrà fare output del bundle

Ma webpack ha bisogno di path assoluto e non quello creato da noi ("./app/temp/scripts"), quindi creiamo var e facciamo require di modulo node che si chiama 'path': questo ha metodo resolve che prende 2 parametri(nome directory, path relativo) risultato --> path.resolve(__dirname,"./app/temp/scripts")

PROBLEMA CON WEBPACK CLI

If You are using actual version of webpack (4.16.5) You can: 
1. Do the same thing as Brad up to 3:29
2. Install webpack using command 
npm install --save-dev webpack in Bash. Nowadays installing webpack locally instead of globaly is recommended for most projects.

3. Install Cli by typing npm install --save-dev webpack-cli in Bash.

4. Create webpack.config.js file as at 4:36, but paste inside:

const path = require('path');
 
module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'App.js',
        path: path.resolve(__dirname, './app/temp/scripts')
    } 
};
5. Take a webpack for a spin using command npx webpack --config webpack.config.js in Your command line instead of using webpack command as at 8:53.

*/
/*BABEL

Must have per developer perchè ti permette di scrivere js es6 e te lo traduce in codice es5 in modo che sia cross browser(buon compromesso per visitatori e programmatori che rimangono sempre aggiornati)
Bisogna installare babel e ciò richiede ben 3 package
uno è il core di babel, il secondo serve a integrare babel con webpack
nooo-> (npm install babel-core babel-loader babel-preset-es2015 --save-dev)
 
upgrade:
npm i @babel/core babel-loader @babel/preset-env --save-dev

*/

var $ = require('jquery');
//var Person = require('./modules/Person');
//es6:
//import Person from './modules/Person';
  
/*class Adult extends Person{
    payTaxes(){
        console.log(this.name + ' $0 taxes');
    }
}  
  
var john = new Person('John Doe', 'red');
var jane = new Adult('Jane Doe', 'green'); 
john.greet();
jane.greet();
jane.payTaxes();  
alert('Test automation '); */

import MobileMenu from './modules/MobileMenu';

var mobileMenu = new MobileMenu();

