'use strict'

const inputUser = document.querySelector('.user');

const inputPhone = document.querySelector('.phone');
const outputPpo = document.querySelector('.p-po');

const inputEmail = document.querySelector('.email');
const outputEpo = document.querySelector('.e-po');

inputEmail.addEventListener('mouseout', () => {
    const verify = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!verify.test(inputEmail.value.trim()) || inputEmail.value.trim() === '' ) {
        outputEpo.style.visibility = 'visible';
        outputEpo.innerHTML = 'Please enter the correct mailbox'
    } else {
        outputEpo.style.visibility = 'hidden';
    }
});