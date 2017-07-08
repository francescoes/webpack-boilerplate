/* global document */

// import custom js
import hello from './public/src/hello';

// import custom styles
import './public/src/style.scss';

document.getElementsByClassName('title')[0].innerHTML = `${hello} World!`;
