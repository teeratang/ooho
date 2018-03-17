var providerFacebook  = new firebase.auth.FacebookAuthProvider();
var providerGoogle    = new firebase.auth.GoogleAuthProvider();
var providerTwitter   = new firebase.auth.TwitterAuthProvider();
// providerFacebook.setCustomParameters({ 'display': 'popup' });

signinWithFacebook = () => {
  firebase.auth().signInWithPopup(providerFacebook).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;

    console.log(user.displayName);
    // console.log(token);
    console.log('login facebook now')
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    // console.log(errorCode);
    // console.log(errorMessage);
    // console.log(email);
    // console.log(credential);
  });
}

signinWithGoogle = () => {
  firebase.auth().signInWithPopup(providerGoogle).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    console.log(user.displayName);
    console.log(token);
    console.log('login google now 1 ')
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorCode);
    console.log(errorMessage);
    console.log(email);
    console.log(credential);
  });
}

signinWithTwitter = () => {
  firebase.auth().signInWithPopup(providerTwitter).then(function(result) {
    var token = result.credential.accessToken;
    var secret = result.credential.secret;
    var user = result.user;
    console.log(user);
    console.log(secret);
    console.log(token);
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorCode);
    console.log(errorMessage);
    console.log(email);
    console.log(credential);
  });
}

signinWithEmail = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    console.log(error.code);
    console.log(error.message);
  });
}
