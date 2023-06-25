window.addEventListener('load', countdown);

function countdown (e) {
  document.getElementById("future-trip").hidden = true;

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

    // Display the result in the element with id="demo"
    document.getElementById("countdown").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "Yo-ho-ho!";

      // Currenct and upcoming trip set for the finished countdown
      document.getElementById("latest-trip").classList.add("archived");
      document.getElementById("latest-trip").classList.remove("active");
      document.getElementById("latest-trip").childNodes[0].classList.remove("fa-fade");
      document.getElementById("latest-trip").removeAttribute("id");

      document.getElementById("future-trip").hidden = false;
    }
  }, 1000);
};
