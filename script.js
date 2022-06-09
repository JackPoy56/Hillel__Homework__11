const labelEl = document.querySelector('label');
const inputEl = document.querySelector('#user__name');
const buttonEl = document.querySelector('.btn');
const userTextEl = document.querySelector('.text');

buttonEl.onclick = () => {
    let userValue = document.querySelector('#user__name').value;

    if (userValue === '') {
        userValue = 'Anonymous';
    } 

    console.log(userValue);
    
    labelEl.classList.add('delete');
    inputEl.classList.add('delete');
    buttonEl.classList.add('delete');
    userTextEl.classList.remove("delete");

    userTextEl.innerText = `Helo, ${userValue}!`;
}