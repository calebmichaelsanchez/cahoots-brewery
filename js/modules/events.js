import $ from "jquery";

const events = {
  init() {
    this.toggleEvent();
  },
  toggleEvent() {
    let documentWidth;
    let toggle = $(".event");

    $(toggle).click(function() {
      documentWidth = $(document).width();
      if (documentWidth < 768) {
        $(this).children(".event__meta").slideToggle();
      }
    });
  }
}

export default events
