import nav from "./menus/nav";
import employee from "./modules/employee";
import events from "./modules/events";

var sheets = document.getElementsByTagName("link");
var sheet = sheets[3];
sheet.parentNode.removeChild(sheet);

nav.init();
events.init();
