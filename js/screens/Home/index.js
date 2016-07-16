import axios from "axios";
import helpers from "../../shared/utils/helpers";
import Cookie from "../../shared/utils/Cookie";

let { redirect } = helpers;
let { getCookie } = Cookie;

let homeContainer = document.getElementById("home");

if(homeContainer) {
  homeContainer.classList.add("active");
  console.log(document.cookie);
  if (getCookie("age") != "21") {
    axios.get("/?format=json")
    .then((response) => {
      console.log(response);
      let redirectUrl = response.data.website.authenticUrl;
      redirect(redirectUrl);
    })
    .catch((response) => {
      console.error(response);
    });
  } else {
    homeContainer.classList.add("active");
  }
}
