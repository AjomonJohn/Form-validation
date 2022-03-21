const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form. addEventListener('submit', (e) => {
    e.preventDefault();
    checkinput();
})
function checkinput() {
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const phonevalue = phone.value.trim();
    const passwordvalue = password.value.trim();
    const password2value = password2.value.trim();

    if (username === "") {
        setErrorFor(username, 'username canot blank');  
    } else {
        setSuccessFor(username);
  }

}
function setErrorFor(input, message) {
    const formcontrol = input.parantElement;
    const small = formcontrol.querySelector('small');
    small.innerText = message; 
    formcontrol.classname = 'formcontrol error';
}