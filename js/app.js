import $ from "jquery";

const toggleNav = function () {
  const toggle = $(".nav-toggle");
  const nav = $("nav");

  $(toggle).click((e) => {
    e.preventDefault();
    $(nav).toggleClass("open");
  });
};

$(document).ready(() => {
  toggleNav();
});