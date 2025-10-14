// do while 
const correctUsername = "daaq";
const correctPassword = "769605";

const form = document.getElementById("form");
const closeBtn = document.getElementById("close");

// login
form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();

  // meel madhan
  if (username === "" || password === "") {
    alert("Fadlan buuxi username iyo password.");
    return;
  }

  // Haddii username sax yahay
  if (username === correctUsername) {
    let enteredPassword = password;
    let tries = 0; 

    // do-while loop
    do {
      if (enteredPassword === correctPassword) {
        alert("Soo dhowow " + username + "!Login waa guuleystay.");
        form.reset();
        return;
      } else {
        tries++;

        if (tries >= 3) {
          alert("Waxaad qaldaysay password-ka 3jeer. Login waa la xiray.");
          form.reset();
          closeBtn.click(); 
          return;
        }

        enteredPassword = prompt("Password waa khaldan. Fadlan geli password cusub:");
        if (enteredPassword === null) {
          alert("Waxaad joojisay isku dayga login.");
          return;
        }
      }
    } while (enteredPassword !== correctPassword);

  } else {
    alert("Username-ka waa khaldan.");
  }
});

// Close
closeBtn.addEventListener("click", function () {
  alert("Login waa la xiray.");
  form.reset();
});