// import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';

console.log('Hello World');
import component from './component.js';

let content = document.getElementById('content');
content.appendChild(component('Hello Bootstrap'));

import "../scss/app.scss";

// import homeIcon from '../images/home.png';
// import bridgeImg from '../images/bridge.jpeg';

// var homeImg = document.getElementById('home');
// homeImg.src = homeIcon;

// var frontImg = document.getElementById('frontImg');
// frontImg.src = bridgeImg;