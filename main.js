let attempts = 3; 
    function loginCheck() {
      let user = document.getElementById("User").value;
      let pass = document.getElementById("password").value;

      let correctUser = "admin";
      let correctPass = "1234";
    
      while (attempts > 0) {
        if (user === correctUser && pass === correctPass) {
          alert("Login Successful! Welcome " + user);
          return; 
        } else {
          attempts--;
          if (attempts > 0) {
            alert("Invalid login! You have " + attempts + " attempts left.");
          } else {
            alert("No attempts left. Login Disabled!");
            document.getElementById("User").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("login").disabled = true;
          }
          break; 
        }
      }
    }