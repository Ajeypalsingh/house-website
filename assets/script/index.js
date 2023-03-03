'use strict'

const inputUser = document.querySelector('.user');

const inputPhone = document.querySelector('.phone');
const outputPpo = document.querySelector('.p-po');

const inputEmail = document.querySelector('.email');
const outputEpo = document.querySelector('.e-po');

inputPhone.addEventListener('mouseout', () => {
    const verify = /^\d{10}$/;
    if (!verify.test(inputPhone.value.trim()) || inputPhone.value.trim() === '' ) {
        outputPpo.style.visibility = 'visible';
        outputPpo.innerHTML = 'Please enter the correct phone number'
    } else {
        outputPpo.style.visibility = 'hidden';
    }
});

inputEmail.addEventListener('mouseout', () => {
    const verify = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!verify.test(inputEmail.value.trim()) || inputEmail.value.trim() === '' ) {
        outputEpo.style.visibility = 'visible';
        outputEpo.innerHTML = 'Please enter the correct mailbox'
    } else {
        outputEpo.style.visibility = 'hidden';
    }
});