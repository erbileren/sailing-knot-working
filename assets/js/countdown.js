window.addEventListener("load", tripList);
window.addEventListener("load", countdown);

var trips = [];
var isCountDownFinished = false;

async function tripList() {
  await fetch("./trips.json")
    .then((response) => response.json())
    .then((json) => (trips = json.reverse()));

  trips.forEach((element) => {
    setTripInfo(element);
  });
}

function setTripInfo(trip) {
  if (
    trip.status == "past" ||
    (trip.status == "current" && isCountDownFinished == true)
  ) {
    var list = document.getElementById("trip-list");
    var item = document.createElement("li");
    var content = document.createElement("p");
    var icon = document.createElement("i");
    var text = document.createElement("span");

    icon.classList.add("fa-solid", "fa-fw");
    switch (trip.type) {
      case "gulet":
        icon.classList.add("fa-ship");
        break;
      case "sail":
        icon.classList.add("fa-sailboat");
        break;
      default:
        icon.classList.add("fa-sun");
        break;
    }
    content.classList.add("archived");
    text.textContent = `${trip.location}'${trip.year}`;

    content.append(icon);
    content.append(text);
    item.appendChild(content);
    list.appendChild(item);
  }
}

function countdown() {
  document.getElementById("future-trip").hidden = true;
  document.getElementById("timeout").hidden= true;

  // Set the date we're counting down to
  var countDownDate = new Date("Sep 9, 2023 00:00:01").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML = days.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    document.getElementById("hour").innerHTML = hours.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    document.getElementById("min").innerHTML = minutes.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    document.getElementById("sec").innerHTML = seconds.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      isCountDownFinished = true;

      document.getElementById("future-trip").hidden = false;
      document.getElementById("latest-trip").hidden = true;

      document.getElementById("timeout").hidden= false;
      document.getElementById("counting").hidden= true;
    }
  }, 0);
}
