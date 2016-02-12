import $ from "jquery";

const employee = {
  init () {
    this.toggleEmployeeMeta();
  },
  toggleEmployeeMeta () {
    let toggle = document.querySelector(".employee__meta");

    $(toggle).click(function(e) {
      e.preventDefault();
      console.log(this);
      //$(this).parent().toggleClass("employee--open");
    });
  }
};

export default employee;
