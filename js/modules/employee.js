import $ from "jquery";

const employee = {
  init () {
    this.toggleEmployeeMeta();
  },
  toggleEmployeeMeta () {
    const toggle = $(".employee__meta");
    const employeeContainer = toggle.closest(".employee");

    $(toggle).click(function(e) {
      e.preventDefault();
      console.log(toggle.closest(".employee"));
      $(this).parent().toggleClass("employee--open");
    });
  }
};

export default employee;
