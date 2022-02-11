function healthCheck() {
  var n = document.getElementById("input1").value;
  var a = document.getElementById("input2").value;
  var w = document.getElementById("input3").value;
  if (a >= 5 && a <= 7) {
    if (w < 15) {
      document.getElementById("result1").innerHTML =
        "Hello " +
        n +
        "!!! your weight is less than recommended value of 15 kg at the age of " +
        a +
        ".";
    } else if (w > 20) {
      document.getElementById("result1").innerHTML =
        "Hello " +
        n +
        "!!! your weight is greater than recommended value of 20 kg at the age of " +
        a +
        ".";
    } else {
      document.getElementById("result1").innerHTML =
        "Hello " + n + "!!! your weight is perfect.";
    }
  }
  if (a >= 8 && a <= 10) {
    if (w < 21) {
      document.getElementById("result1").innerHTML =
        "Hello " +
        n +
        "!!! your weight is less than recommended value of 21 kg at the age of " +
        a +
        ".";
    } else if (w > 25) {
      document.getElementById("result1").innerHTML =
        "Hello " +
        n +
        "!!! your weight is greater than recommended value of 25 kg at the age of " +
        a +
        ".";
    } else {
      document.getElementById("result1").innerHTML =
        "Hello " + n + "!!! your weight is perfect.";
    }
  }
  if (a >= 11 && a <= 15) {
    if (w < 26) {
      document.getElementById("result1").innerHTML =
        "Hello " + n + "!!! your weight is less than recommended value of 26 kg at the age of " + a + ".";
    } else if (w > 30) {
      document.getElementById("result1").innerHTML =
        "Hello " + n + "!!! your weight is greater than recommended value of 30 kg at the age of " + a + ".";
    } else {
      document.getElementById("result1").innerHTML =
        "Hello " + n + "!!! your weight is perfect.";
    }
  }
  if (a >= 16 && a <= 20) {
    if (w < 31) {
      document.getElementById("result1").innerHTML =
        "Hello " + n + "!!! your weight is less than recommended value of 31 kg at the age of " + a + ".";
    } else if (w > 40) {
      document.getElementById("result1").innerHTML =
        "Hello " + n + "!!! your weight is greater than recommended value of 40 kg at the age of " + a + ".";
    } else {
      document.getElementById("result1").innerHTML =
        "Hello " + n + "!!! your weight is perfect.";
    }
  }
}