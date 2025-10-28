var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d = new Date();
var day = days[d.getDay()];

var date = d.getDate();
var month = months[d.getMonth()];
var year = d.getFullYear();
var x = document.getElementById("today");
x.innerHTML = day + " " + date + " " + month + " " + year;

///////// Validation
const choise = document.querySelector(".choise");
const form = document.querySelector("from.details");
choise.addEventListener("click", function () {
    if (form.classList.contains("was-validated")) {
        window.open("start-repair-choose.html", "_blank");
    }
});
function NewTab() {
    if (form.classList.contains("was-validated")) {
        window.open("start-repair-choose.html", "_blank");
    }
}

/////////////////Pop up Unknown problem
$("#UnkownProblem").on('click', function () {
    $('#popup-problem-modal').modal('show');
  })
  $("#cancelUnknownProblemModal").on('click', function () {
    $('#popup-problem-modal').modal('hide');
  })
  $("#submitUnknownProblemModal").on('click', function () {
    $('#popup-problem-modal').modal('hide');
  })
  
  ///////////////////////////////////
const progress_items_track = document.querySelectorAll(".progress-item.track");
for (let i = 0; i < progress_items_track.length; i++) {
  setInterval(() => {
    progress_items_track[i].classList.add("done");
  }, 2000);
}
//////// Choose Type
const repair_services = document.querySelectorAll(".start-repair_services"),
  repair_services_items = document.querySelectorAll(".All-start-repair_services-item"),
  progress_titles = document.querySelectorAll(".step-title");
  progress_items = document.querySelectorAll(".progress-item");

for (let i = 0; i < repair_services_items.length; i++) {
  repair_services_items[i].addEventListener("click", function () {
    progress_items.forEach(element => {
      element.classList.remove("done");
      element.classList.remove("status");
    });
    repair_services.forEach(element => {
      element.classList.remove("active");
    });
    progress_titles.forEach(element => {
      element.classList.remove("active");
    });
    switch (repair_services_items[i].getAttribute('service-val')) {
      case "s1":
        repair_services[1].classList.add("active");
        progress_titles[1].classList.add("active");
        progress_items[0].classList.add("done");
        progress_items[1].classList.add("status");
        document.querySelector(".progress-bar").style.width =  "20%";
        break;
      case "s2":
        repair_services[2].classList.add("active");
        progress_titles[2].classList.add("active");
        progress_items[0].classList.add("done");
        progress_items[1].classList.add("done");
        progress_items[2].classList.add("status");
        document.querySelector(".progress-bar").style.width =  "30%";
        break;
      case "s3":
        repair_services[3].classList.add("active");
        progress_titles[3].classList.add("active");
        progress_items[0].classList.add("done");
        progress_items[1].classList.add("done");
        progress_items[2].classList.add("done");
        progress_items[3].classList.add("status");
        document.querySelector(".progress-bar").style.width =  "40%";
        break;
      case "s4":
        repair_services[4].classList.add("active");
        progress_titles[4].classList.add("active");
        progress_items[0].classList.add("done");
        progress_items[1].classList.add("done");
        progress_items[2].classList.add("done");
        progress_items[3].classList.add("done");
        progress_items[4].classList.add("status");
        document.querySelector(".progress-bar").style.width =  "60%";
        break;
      case "s5":
        repair_services[5].classList.add("active");
        progress_titles[5].classList.add("active");
        progress_items[0].classList.add("done");
        progress_items[1].classList.add("done");
        progress_items[2].classList.add("done");
        progress_items[3].classList.add("done");
        progress_items[4].classList.add("done");
        progress_items[5].classList.add("status");
        document.querySelector(".progress-bar").style.width =  "70%";
        break;
      case "s6":
        repair_services[6].classList.add("active");
        progress_titles[6].classList.add("active");
        progress_items[0].classList.add("done");
        progress_items[1].classList.add("done");
        progress_items[2].classList.add("done");
        progress_items[3].classList.add("done");
        progress_items[4].classList.add("done");
        progress_items[5].classList.add("done");
        progress_items[6].classList.add("status");
        document.querySelector(".progress-bar").style.width =  "80%";
        break;
      case "s7":
        repair_services[7].classList.add("active");
        progress_titles[7].classList.add("active");
        progress_items[0].classList.add("done");
        progress_items[1].classList.add("done");
        progress_items[2].classList.add("done");
        progress_items[3].classList.add("done");
        progress_items[4].classList.add("done");
        progress_items[5].classList.add("done");
        progress_items[6].classList.add("done");
        progress_items[7].classList.add("status");
        document.querySelector(".progress-bar").style.width =  "100%";
        break;
      case "s8":
        progress_items[0].classList.add("done");
        progress_items[1].classList.add("done");
        progress_items[2].classList.add("done");
        progress_items[3].classList.add("done");
        progress_items[4].classList.add("done");
        progress_items[5].classList.add("done");
        progress_items[6].classList.add("done");
        progress_items[7].classList.add("done");
        break;
    }
  });
}

for (let i = 0; i < progress_items.length; i++) {
  progress_items[i].addEventListener("click", function () {
    if (progress_items[i].classList.contains("done")) {
      progress_items.forEach(element => {
        element.classList.remove("done");
        element.classList.remove("status");
      });
      repair_services.forEach(element => {
        element.classList.remove("active");
      });
      progress_titles.forEach(element => {
        element.classList.remove("active");
      });
      switch (progress_items[i].getAttribute('progress-val')) {
        case "p1":
          progress_items[i].classList.add("status");
          repair_services[0].classList.add("active");
          progress_titles[0].classList.add("active");
          document.querySelector(".progress-bar").style.width =  "5%";
          break;
        case "p2":
          progress_items[0].classList.add("done");
          progress_items[i].classList.add("status");
          repair_services[1].classList.add("active");
          progress_titles[1].classList.add("active");
          document.querySelector(".progress-bar").style.width =  "20%";
          break;
        case "p3":
          progress_items[0].classList.add("done");
          progress_items[1].classList.add("done");
          progress_items[i].classList.add("status");
          repair_services[2].classList.add("active");
          progress_titles[2].classList.add("active");
          document.querySelector(".progress-bar").style.width =  "30%";
          break;
        case "p4":
          progress_items[0].classList.add("done");
          progress_items[1].classList.add("done");
          progress_items[2].classList.add("done");
          progress_items[i].classList.add("status");
          repair_services[3].classList.add("active");
          progress_titles[3].classList.add("active");
          document.querySelector(".progress-bar").style.width =  "40%";
          break;
        case "p5":
          progress_items[0].classList.add("done");
          progress_items[1].classList.add("done");
          progress_items[2].classList.add("done");
          progress_items[3].classList.add("done");
          progress_items[i].classList.add("status");
          repair_services[4].classList.add("active");
          progress_titles[4].classList.add("active");
          document.querySelector(".progress-bar").style.width =  "60%";
          break;
        case "p6":
          progress_items[0].classList.add("done");
          progress_items[1].classList.add("done");
          progress_items[2].classList.add("done");
          progress_items[3].classList.add("done");
          progress_items[4].classList.add("done");
          progress_items[i].classList.add("status");
          repair_services[5].classList.add("active");
          progress_titles[5].classList.add("active");
          document.querySelector(".progress-bar").style.width =  "70%";
          break;
        case "p7":
          progress_items[0].classList.add("done");
          progress_items[1].classList.add("done");
          progress_items[2].classList.add("done");
          progress_items[3].classList.add("done");
          progress_items[4].classList.add("done");
          progress_items[5].classList.add("done");
          progress_items[i].classList.add("status");
          repair_services[6].classList.add("active");
          progress_titles[6].classList.add("active");
          document.querySelector(".progress-bar").style.width =  "80%";
          break;
        case "p8":
          progress_items[0].classList.add("done");
          progress_items[1].classList.add("done");
          progress_items[2].classList.add("done");
          progress_items[3].classList.add("done");
          progress_items[4].classList.add("done");
          progress_items[5].classList.add("done");
          progress_items[6].classList.add("done");
          progress_items[i].classList.add("status");
          repair_services[7].classList.add("active");
          progress_titles[7].classList.add("active");
          break;
      }
    }
  });
}


////////////////////
const available_hour = document.querySelectorAll(".available-hour"),
  next = document.querySelector(".next");

for (let i = 0; i < available_hour.length; i++) {
  available_hour[i].addEventListener("click", function () {
    available_hour.forEach(function (element) {
      element.classList.remove("selected");
    });
    available_hour[i].classList.add("selected");
    next.classList.add("active");
  });
}
///////////////////

const currentDate = new Date();
const hours = document.querySelectorAll(".available-hour.now");
setInterval(function () {
  if (currentDate.getHours() >= 9) {
    hours[0].classList.add("hide");
  }
  if (currentDate.getHours() >= 9 && currentDate.getMinutes() >= 30) {
    hours[0].classList.add("hide");
    hours[1].classList.add("hide");
  }
  if (currentDate.getHours() >= 10) {
    hours[0].classList.add("hide");
    hours[1].classList.add("hide");
    hours[2].classList.add("hide");
  }
  if (currentDate.getHours() >= 10 && currentDate.getMinutes() >= 30) {
    hours[0].classList.add("hide");
    hours[1].classList.add("hide");
    hours[2].classList.add("hide");
    hours[3].classList.add("hide");
  }
  if (currentDate.getHours() >= 11) {
    hours[0].classList.add("hide");
    hours[1].classList.add("hide");
    hours[2].classList.add("hide");
    hours[3].classList.add("hide");
    hours[4].classList.add("hide");
  }
  if (currentDate.getHours() >= 11 && currentDate.getMinutes() >= 30) {
    hours[0].classList.add("hide");
    hours[1].classList.add("hide");
    hours[2].classList.add("hide");
    hours[3].classList.add("hide");
    hours[4].classList.add("hide");
    hours[5].classList.add("hide");
  }
  if (currentDate.getHours() >= 12) {
    hours[0].classList.add("hide");
    hours[1].classList.add("hide");
    hours[2].classList.add("hide");
    hours[3].classList.add("hide");
    hours[4].classList.add("hide");
    hours[5].classList.add("hide");
    hours[6].classList.add("hide");
  }
  if (currentDate.getHours() >= 12 && currentDate.getMinutes() >= 30) {
    hours[0].classList.add("hide");
    hours[1].classList.add("hide");
    hours[2].classList.add("hide");
    hours[3].classList.add("hide");
    hours[4].classList.add("hide");
    hours[5].classList.add("hide");
    hours[6].classList.add("hide");
    hours[7].classList.add("hide");
  }
  if (currentDate.getHours() >= 13) {
    hours[0].classList.add("hide");
    hours[1].classList.add("hide");
    hours[2].classList.add("hide");
    hours[3].classList.add("hide");
    hours[4].classList.add("hide");
    hours[5].classList.add("hide");
    hours[6].classList.add("hide");
    hours[7].classList.add("hide");
    hours[8].classList.add("hide");
  }
  if (currentDate.getHours() >= 13 && currentDate.getMinutes() >= 30) {
    hours[0].classList.add("hide");
    hours[1].classList.add("hide");
    hours[2].classList.add("hide");
    hours[3].classList.add("hide");
    hours[4].classList.add("hide");
    hours[5].classList.add("hide");
    hours[6].classList.add("hide");
    hours[7].classList.add("hide");
    hours[8].classList.add("hide");
    hours[9].classList.add("hide");
  }
  if (currentDate.getHours() >= 14) {
    hours[0].classList.add("hide");
    hours[1].classList.add("hide");
    hours[2].classList.add("hide");
    hours[3].classList.add("hide");
    hours[4].classList.add("hide");
    hours[5].classList.add("hide");
    hours[6].classList.add("hide");
    hours[7].classList.add("hide");
    hours[8].classList.add("hide");
    hours[9].classList.add("hide");
    hours[10].classList.add("hide");
  }
  if (currentDate.getHours() >= 14 && currentDate.getMinutes() >= 30) {
    hours[0].classList.add("hide");
    hours[1].classList.add("hide");
    hours[2].classList.add("hide");
    hours[3].classList.add("hide");
    hours[4].classList.add("hide");
    hours[5].classList.add("hide");
    hours[6].classList.add("hide");
    hours[7].classList.add("hide");
    hours[8].classList.add("hide");
    hours[9].classList.add("hide");
    hours[10].classList.add("hide");
    hours[11].classList.add("hide");
  }
  if (currentDate.getHours() >= 15) {
    hours[0].classList.add("hide");
    hours[1].classList.add("hide");
    hours[2].classList.add("hide");
    hours[3].classList.add("hide");
    hours[4].classList.add("hide");
    hours[5].classList.add("hide");
    hours[6].classList.add("hide");
    hours[7].classList.add("hide");
    hours[8].classList.add("hide");
    hours[9].classList.add("hide");
    hours[10].classList.add("hide");
    hours[11].classList.add("hide");
    hours[12].classList.add("hide");
  }
  if (currentDate.getHours() >= 15 && currentDate.getMinutes() >= 30) {
    hours[0].classList.add("hide");
    hours[1].classList.add("hide");
    hours[2].classList.add("hide");
    hours[3].classList.add("hide");
    hours[4].classList.add("hide");
    hours[5].classList.add("hide");
    hours[6].classList.add("hide");
    hours[7].classList.add("hide");
    hours[8].classList.add("hide");
    hours[9].classList.add("hide");
    hours[10].classList.add("hide");
    hours[11].classList.add("hide");
    hours[12].classList.add("hide");
    hours[13].classList.add("hide");
  }
  if (currentDate.getHours() >= 16) {
    hours[0].classList.add("hide");
    hours[1].classList.add("hide");
    hours[2].classList.add("hide");
    hours[3].classList.add("hide");
    hours[4].classList.add("hide");
    hours[5].classList.add("hide");
    hours[6].classList.add("hide");
    hours[7].classList.add("hide");
    hours[8].classList.add("hide");
    hours[9].classList.add("hide");
    hours[10].classList.add("hide");
    hours[11].classList.add("hide");
    hours[12].classList.add("hide");
    hours[13].classList.add("hide");
    hours[14].classList.add("hide");
  }
  if (currentDate.getHours() >= 16 && currentDate.getMinutes() >= 30) {
    hours[0].classList.add("hide");
    hours[1].classList.add("hide");
    hours[2].classList.add("hide");
    hours[3].classList.add("hide");
    hours[4].classList.add("hide");
    hours[5].classList.add("hide");
    hours[6].classList.add("hide");
    hours[7].classList.add("hide");
    hours[8].classList.add("hide");
    hours[9].classList.add("hide");
    hours[10].classList.add("hide");
    hours[11].classList.add("hide");
    hours[12].classList.add("hide");
    hours[13].classList.add("hide");
    hours[14].classList.add("hide");
    hours[15].classList.add("hide");
    console.log("16");
  }
  if (currentDate.getHours() >= 17) {
    hours[0].classList.add("hide");
    hours[1].classList.add("hide");
    hours[2].classList.add("hide");
    hours[3].classList.add("hide");
    hours[4].classList.add("hide");
    hours[5].classList.add("hide");
    hours[6].classList.add("hide");
    hours[7].classList.add("hide");
    hours[8].classList.add("hide");
    hours[9].classList.add("hide");
    hours[10].classList.add("hide");
    hours[11].classList.add("hide");
    hours[12].classList.add("hide");
    hours[13].classList.add("hide");
    hours[14].classList.add("hide");
    hours[15].classList.add("hide");
    hours[16].classList.add("hide");
  }
  if (currentDate.getHours() >= 17 && currentDate.getMinutes() >= 30) {
    hours[0].classList.add("hide");
    hours[1].classList.add("hide");
    hours[2].classList.add("hide");
    hours[3].classList.add("hide");
    hours[4].classList.add("hide");
    hours[5].classList.add("hide");
    hours[6].classList.add("hide");
    hours[7].classList.add("hide");
    hours[8].classList.add("hide");
    hours[9].classList.add("hide");
    hours[10].classList.add("hide");
    hours[11].classList.add("hide");
    hours[12].classList.add("hide");
    hours[13].classList.add("hide");
    hours[14].classList.add("hide");
    hours[15].classList.add("hide");
    hours[16].classList.add("hide");
    hours[17].classList.add("hide");
  }
}, 1000);
/////////////////////////////////
  