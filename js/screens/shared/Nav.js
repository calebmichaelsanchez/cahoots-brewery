(function(window, document) {
  const pageWrap = document.querySelector(".page-wrap");
  const toggle = document.querySelector(".nav-toggle");
  let navItemToggle = document.querySelectorAll(".nav-menu-item");
  let position;
  navItemToggle = [...navItemToggle];

  let nav = document.getElementsByTagName("nav");
  let open = false;

  nav = [...nav];
  nav = nav[0];

  function onScroll() {
    position = window.pageYOffset;
    updateElement(position);
  }

  function updateElement(position) {
    if (position >= 85) {
      pageWrap.classList.add("scrolled");
    } else {
      pageWrap.classList.remove("scrolled");
    }
  }

  function toggleClick(e) {
    e.preventDefault();
    if (!open) {
      nav.classList.add("open");
      pageWrap.classList.add("nav-open");
      open = true
    } else {
      nav.classList.remove("open");
      pageWrap.classList.remove("nav-open");
      open = false;
    }
  }

  function navItemClick() {
    nav.classList.remove("open");
    pageWrap.classList.remove("nav-open");
    open = false;
  }
  if (nav) {
    window.addEventListener("scroll", onScroll, false);
    toggle.addEventListener("click", toggleClick, false);
    for(var i = 0; i < navItemToggle.length; i++) {
      navItemToggle[i].addEventListener("click", navItemClick, false);
    }
  }

})(window, document);
