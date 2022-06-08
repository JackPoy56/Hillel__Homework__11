const labelEl = document.body.children[0];
const inputEl = document.body.children[1];
const buttonEl = document.body.children[2];

buttonEl.onclick = () => {
    let userValue = document.body.children[1].value;

    if (userValue === '') {
        userValue = 'Anonymous';
    } 

    console.log(userValue);
    
    labelEl.classList.add('delete');
    labelEl.classList.add('delete');
    labelEl.classList.add('delete');

    document.body.innerHTML = `<p>Hello, ${userValue}!</p>`;
}