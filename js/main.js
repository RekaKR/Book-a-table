window.onload = function () {
  //----------------------basic setup--------------------
  const donne = document.querySelector(".book-button-big");
  donne.classList.add("invalid");

  //-----------------Name validation-----------------
  let userName = document.getElementById("name");
  //triggers when the form input loses focus 
  userName.addEventListener("blur", validName);

  function validName() {
    let fail = true;
    let valName = String(userName.value);
    //print the if statments
    /*     console.log(/\d/.test(valName));
        console.log(!(valName.includes(" ")));
        console.log(valName.length < 5); */
    //if, that checks the validity
    if ((/\d/.test(valName)) == true || !(valName.includes(" ")) || (valName.length < 5)) {
      fail = false;
    }
    //lets see the result+return
    console.log("Valid a név? " + fail);
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
      //console.log("Valid e-mail cím");
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
      //console.log("Invalid e-mail cím");
    }
    console.log("Valid az e-mail cím? " + valid);
    return (valid);
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
  let dayN = day;

  if (day <= 9) { day = String("0" + day); }

  let actualDate = String(year + "-" + month + "-" + day);
  //  console.log(actualDate);
  //  console.log(typeof actualDate);
  reservDate.setAttribute("min", actualDate);

  let dateRange = String(year + "-" + month + "-" + (dayN + 20));
  reservDate.setAttribute("max", dateRange);

  //------------------ setting time --------------//
  let reservTime = document.getElementById("time");
  //  console.log(reservTime);

  let hour = d.getHours() + 1;
  //  console.log(hour);
  //  console.log(typeof hour);

  let minute = d.getMinutes();
  if (minute <= 9) { minute = String("0" + minute); }
  //  console.log(minute);
  //  console.log(typeof minute);

  let avilableTime = String(hour + ":" + minute);

  reservTime.setAttribute("min", avilableTime);


  document.querySelector("form").addEventListener("change", logRes);

  function logRes() {
    let x = validName();
    console.log(x);
    let y = emailIsValid();
    console.log(y);
    console.log(reservDate.value.length);
    console.log(reservTime.value.length);
    if ((x === true) && (y === true) && (reservDate.value.length > 0) && (reservTime.value.length > 0)) {
      donne.classList.remove("invalid");
      console.log
      console.log("Order");
      console.log(userName.value);
      console.log(userEmail.value);
      console.log(reservDate.value + " " + reservTime.value);
    }
  }


  // tables svg change------------------------------
  //------------------------------------------------
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

