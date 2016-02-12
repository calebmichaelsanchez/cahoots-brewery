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

export default events;

// (function(window, document) {

//   let width = window.innerWidth || document.documentElement.clientWidth;
//   let events = document.querySelectorAll(".event");
//   events = [...events];
//   let i, eventChildren, eventChild, eventHeight, clicked;
//   let eventsLength = events.length;

//   function onResize() {
//     width = window.innerWidth || document.documentElement.clientWidth;
//   }

//   function onClick(element, height) {
//     console.log(height);
//     console.log(clicked);
//     if (clicked === false) {
//       element.style.height = height;
//       clicked = true;
//     } else {
//       element.style.height = 0;
//     }
//   }

//   function toggleEvent() {
//     for(i = 0; i < eventsLength; i++) {
//       var clicked = false;
//       eventChildren = events[i].children;
//       eventChildren = [...eventChildren];
//       eventChild = eventChildren[1];
//       eventHeight = eventChild.offsetHeight;
//       eventChild.style.height = 0;
//       events[i].addEventListener("click", function() {
//         //onClick(eventChild, eventHeight);
//         if (clicked === false) {
//           eventChild.style.height = eventHeight;
//           clicked = true;
//         } else {
//           eventChild.style.height = 0;
//         }
//       });
//     }
//   }

//   if (width < 768) {
//     toggleEvent();
//   }

//   window.addEventListener("resize", onResize, false);

// })(window, document);
