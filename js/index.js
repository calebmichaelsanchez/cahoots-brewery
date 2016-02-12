import "babel-polyfill";
import "./shims/classList.js";
import "./utils/customFormat.js";
import "./utils/closest.js";
import nav from "./menus/nav";
import employee from "./modules/Employee/employee";
//import events from "./modules/Events/events";
import "./modules/Events/index.js";
import hours from "./modules/Hours/hours";
import "./modules/BeerLocator/index.js";
import "./modules/Sliders/Brewery/index.js";
import "./modules/Sliders/Taproom/index.js";

var sheets = document.getElementsByTagName("link");
//console.log(sheets);
var sheet = sheets[4];
//console.log(sheet);
sheet.parentNode.removeChild(sheet);

nav.init();
hours.init();
//events.init();
