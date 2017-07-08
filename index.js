/* global document */

// import custom js
import hello from './src/hello';

// import custom styles
import './src/style.scss';

document.getElementsByClassName('title')[0].innerHTML = `${hello} World!`;
