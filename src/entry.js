require('!style!css!./style.css');
require('json!yaml!./cats.yml');
import 'babel-polyfill';
 import cats from './cats';
 import $ from 'jquery';
$('<h1>Cats</h1>').appendTo('body');
 const ul = $('<ul></ul>').appendTo('body');
 for (const cat of cats) {
	 $('<li></li>').text(cat).appendTo(ul);
 }
document.write(require('./content.js'));