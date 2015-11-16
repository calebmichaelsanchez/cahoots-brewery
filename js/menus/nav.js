import $ from "jquery";

const nav = {
  init () {
    this.toggleNav();
  },
  toggleNav () {
    const $toggle = $(".nav-toggle");
    const $nav = $("nav");

    $($toggle).click((e) => {
      e.preventDefault();
      $($nav).toggleClass("open");
    });
  }
};

export default nav;