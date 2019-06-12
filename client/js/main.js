const serverUrl = 'http://localhost:3000';

function onSignIn(googleUser) {
  const idToken = googleUser.getAuthResponse().id_token;

  axios
    .post(`${serverUrl}/tokensignin`, { idToken })
    .then(function({ data }) {
      // IMPORTANT! Saves the accessToken from server
      localStorage.setItem('accessToken', data.accessToken);

      console.log(data);
      document.querySelector('#sign-in-first-message').style.display = 'none';
      document.querySelector('#sign-out-button').style.display = 'block';
    })
    .catch(function(err) {
      console.log(err);
    });
}

function signOut() {
  const auth2 = gapi.auth2.getAuthInstance();

  auth2
    .signOut()
    .then(function() {
      console.log('User signed out.');
      document.querySelector('#sign-in-first-message').style.display = 'block';
      document.querySelector('#sign-out-button').style.display = 'none';
    })
    .catch(function(err) {
      console.log(err);
    });
}
