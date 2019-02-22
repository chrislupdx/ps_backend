function getexist() {
  fetch('https://exist.io/api/1/auth/simple-token/', {
    method: 'POST',
    mode: 'cors',
    headers: {
      Authorization: {'username':'wildetangeant@gmail.com','password':'WuWeimya55'},
    }
  })

}

getexist();

