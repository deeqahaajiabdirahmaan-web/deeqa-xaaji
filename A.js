function saveAndGo() { 
  // Qaado qiimaha input fields
  var username = document.getElementById('createUsername').value.trim();
  var password = document.getElementById('createPassword').value;
  var rePassword = document.getElementById('rePassword').value;
  var msg = document.getElementById('msg'); // Element-ka message-ka

  // Clear fariinta hore
  msg.innerText = '';

  // Validation: Username
  if (!username) {
    msg.innerText = 'Fadlan geli username-kaaga';
    msg.style.color = 'red';
    return;
  }
  if (username.length < 3) {
    msg.innerText = 'Username waa inuu ahaadaa ugu yaraan 3 characters';
    msg.style.color = 'red';
    return;
  }

  // Validation: Password
  if (!password) {
    msg.innerText = 'Fadlan geli password-kaaga';
    msg.style.color = 'red';
    return;
  }
  if (password.length < 3 ){
    msg.innerText = 'Password waa inuu ahaadaa ugu yaraan 3 characters';
    msg.style.color = 'red';
    return;
  }

  // Validation: Passwords match
  if (password !== rePassword) {
    msg.innerText = 'Passwords-ka ma isku mid yihiin!';
    msg.style.color = 'red';
    return;
  }

  // Haddii validation dhammaan sax yahay, kaydi localStorage (demo purposes)
  localStorage.setItem('savedUsername', username);
  localStorage.setItem('savedPassword', password);

  // Show success message
  msg.innerText = 'User-ka waa la abuuray guul!';
  msg.style.color = 'green';

  // Redirect 1 second kadib, si user u arko message-ka
  setTimeout(function() {
    window.location.href = 'c.html';
  });
}
