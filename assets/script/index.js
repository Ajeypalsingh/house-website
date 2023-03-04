'use strict'

const inputUser = document.querySelector('.user');
const outputUpo = document.querySelector('.u-po');

const inputPhone = document.querySelector('.phone');
const outputPpo = document.querySelector('.p-po');

const inputEmail = document.querySelector('.email');
const outputEpo = document.querySelector('.e-po');

const inputMessage = document.querySelector('.message');
const outputMpo = document.querySelector('.m-po');

inputUser.addEventListener('mouseout', () => {
    const verify = /^([A-Za-z]+\s?)*[A-Za-z]$/;
    if (!verify.test(inputUser.value.trim()) || inputUser.value.trim() === '' ) {
        outputUpo.style.visibility = 'visible';
        outputUpo.innerHTML = 'Please enter the correct name'
    } else {
        outputUpo.style.visibility = 'hidden';
    }
});

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

inputMessage.addEventListener('mouseout', () => {
    const verify = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (inputMessage.value.trim() === '' ) {
        outputMpo.style.visibility = 'visible';
        outputMpo.innerHTML = 'The message cannot be empty'
    } else {
        outputMpo.style.visibility = 'hidden';
    }
});