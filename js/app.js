import nav from "./menus/nav";
import employee from "./modules/employee";
import events from "./modules/events";
import hours from "./modules/hours";
import "./Sliders/";

var sheets = document.getElementsByTagName("link");
var sheet = sheets[3];
sheet.parentNode.removeChild(sheet);

nav.init();
events.init();
hours.init();
