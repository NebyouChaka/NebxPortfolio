const username =document.querySelector('#username');
const email = document.querySelector('#email');
const submit = document.querySelector(".submit");


// FormData.addEventListener('submit',function (e){
//     e.preventDefault();
// })
const isRequired = value => value === ''?false : true;
const isBetween = (length,min,max) => length > max ? false : true;

const checkEmail = () =>{
    let valid = false;
const email = email.value.trim();
if (!isRequired(email)) {
    showError(email, 'Email cannot be blank.');

} else if (!isEmailValid(email)) {
    showError(email, 'Email is not valid')
}else{
    showError(email);
    valid = true;
}
    return valid;
} ;  
// FormData.addEventListener('input', function (e){
//     switch (e.target.id){
//         case 'username':
//             checkUsername();
//             break;
//         case 'email':
//             checkEmail();
//             break;    
//     }

