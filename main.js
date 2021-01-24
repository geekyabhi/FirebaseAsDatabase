var firebaseConfig = {
    apiKey: "AIzaSyBbABYd9tl6NICGrVfEQc9IwE3NgFJKQhU",
    authDomain: "login-form-bbb60.firebaseapp.com",
    projectId: "login-form-bbb60",
    databaseURL:"https://login-form-bbb60-default-rtdb.firebaseio.com/",
    storageBucket: "login-form-bbb60.appspot.com",
    messagingSenderId: "864640313115",
    appId: "1:864640313115:web:d348e27af615ddf8fa15be",
    measurementId: "G-14Q484HZYH"
  }
  firebase.initializeApp(firebaseConfig);

var messagesRef=firebase.database().ref('messages')

document.getElementById('contactForm').addEventListener('submit',submitForm)

function submitForm(e){
    e.preventDefault()
    var name=getInputValue('name')
    var company=getInputValue('company')
    var phone=getInputValue('phone')
    var message=getInputValue('message')
    var email=getInputValue('email')   

    saveMessage(name,company,email,phone,message)

    document.querySelector('.alert').style.display='block'
    setTimeout(() => {
        document.querySelector('.alert').style.display='none'
    }, 3000);

}

function getInputValue(id){
    return document.getElementById(id).value
}

function saveMessage(name,company,email,phone,message){
    var newmessagesRef=messagesRef.push()
    newmessagesRef.set({
        name:name,
        company:company,
        email:email,
        phone:phone,
        message:message
    })
}