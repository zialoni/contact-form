var firebaseConfig = {
  apiKey: "AIzaSyDvKs_X4c2YPybNwQs7mhHTYIVRaE0vNOY",
  authDomain: "contactform-81fa4.firebaseapp.com",
  databaseURL: "https://contactform-81fa4.firebaseio.com",
  projectId: "contactform-81fa4",
  storageBucket: "contactform-81fa4.appspot.com",
  messagingSenderId: "821551065320",
  appId: "1:821551065320:web:c541fbe4644d594573c15d",
  measurementId: "G-48VJS6N7GG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

//Reference messages collection

var messageRef = firebase.database().ref("messages");

//listen for form submit

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getInputVal("name");
  var company = getInputVal("company");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var message = getInputVal("message");

  //save message
  saveMessage(name.company, email, phone, message);
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase

function saveMessage(name, company, email, phone, message) {
  var newMessageRef = messageRef.push();

  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}
