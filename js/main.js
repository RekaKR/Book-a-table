window.onload = function () {

  let userName = document.getElementById("name");

  //triggers when the form input loses focus 
  userName.addEventListener("blur", validName);

  function validName() {
    let fail = false;
    let valName = String(userName.value);
    //print the if statments
    console.log(/\d/.test(valName));
    console.log(!(valName.includes(" ")));
    console.log(valName.length < 5);
    //if, that checks the validity
    if ((/\d/.test(valName)) == true || !(valName.includes(" ")) || (valName.length < 5)) {
      fail = true;
      console.log("Hiba az if-ben " + fail);
    }
    //lets see the result+return
    console.log("Hibás a név? " + fail);
    return (fail);
  }

  //-----------------------email--------------------//
  let userEmail = document.getElementById("email");

  //triggers when the form input loses focus 
  userEmail.addEventListener("blur", emailIsValid);
  let wOn = false;

  function emailIsValid() {
    let valid = false;

    if (/\S+@\S+\.\S+/.test(userEmail.value) && userEmail.value.length > 7) {
      valid = true;
      console.log("Valid e-mail cím");
      if (wOn) {
        document.querySelector(".wrong").remove();
        userEmail.classList.remove("noBotMarg");
        wOn = false;
      }
    } else {
      if (!wOn) {
        userEmail.insertAdjacentHTML('afterend', '<p class="wrong"></p>');
        document.querySelector(".wrong").innerHTML = "Wrong e-mail format";
        wOn = true;
        userEmail.classList.add("noBotMarg");
      }
      console.log("Invalid e-mail cím");
    }
  }



  //---------------------date--------------------//
  let reservDate = document.getElementById("date");
  //  console.log(reservDate);

  let d = new Date();

  let year = d.getFullYear();
  //  console.log(year);
  //  console.log(typeof year);

  let month = d.getMonth() + 1;
  //  console.log(month);
  //  console.log(typeof month);

  let day = d.getDate();
  //  console.log(day);
  //  console.log(typeof day);

  if (day <= 9) { day = String("0" + day); }

  let actualDate = String(year + "-" + month + "-" + day);
  //  console.log(actualDate);
  //  console.log(typeof actualDate);

  reservDate.setAttribute("min", actualDate);

  let reservTime = document.getElementById("time");
  //  console.log(reservTime);

  //------------------ setting time --------------//
  let hour = d.getHours() + 1;
  //  console.log(hour);
  //  console.log(typeof hour);

  let minute = d.getMinutes();
  if (minute <= 9) { minute = String("0" + minute); }
  //  console.log(minute);
  //  console.log(typeof minute);


  let avilableTime = String(hour + ":" + minute);

  reservTime.setAttribute("min", avilableTime);


  // tables svg change
  let click = document.getElementById("click")
  let svg = document.getElementById("svg8")

  click.onclick = function () {
    svg.classList.toggle("svg-visible");
    if (click.textContent == "See the tables") {
      click.innerHTML = "Hide the tables";
    } else {
      click.innerHTML = "See the tables";
    };
  }
}

