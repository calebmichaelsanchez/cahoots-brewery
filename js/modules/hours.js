import $ from "jquery";

const hours = {
  init() {
    this.displayHours();
  },
  displayHours() {
    let res;
    let storeHours = document.getElementById("store-hours");
    $.ajax("/?format=json", {
      method: "get",
      success: function(response) {
        res = response;
      },
      error: function(response) {
        console.log(response);
        console.error("Request for collection failed");
      },
      complete: function() {
        let businessHours = res.websiteSettings.businessHours;
        console.log(businessHours);
        let day;
        let text;
        console.log(new Date().getDay());
        switch (new Date().getDay()) {
          case 0:
            day = "sunday";
            break;
          case 1:
            day = "monday";
            break;
          case 2:
            day = "tuesday";
            break;
          case 3:
            day = "wednesday";
            break;
          case 4:
            day = "thursday";
            break;
          case 5:
            day = "friday";
            break;
          case 6:
            day = "saturday";
            break;
        }
        if (day === "sunday") {
          text = "Closed";
        } else {
          text = day.toUpperCase() + " - " + businessHours[day]["text"];
        }
        storeHours.innerHTML = text;
      }
    });
  }
}

export default hours;
