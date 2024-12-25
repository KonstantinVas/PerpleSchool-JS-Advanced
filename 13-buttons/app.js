'use strict';

const root = document.querySelector('.root');
const wrapper = document.querySelector('.wrapper');
let i = 0;
wrapper.innerHTML = i;

root.addEventListener('click', function (event) {
    const el = event.target;

    const arr = [...root.children];
    for (let item of arr) {
        if (item != el && el.tagName === 'BUTTON') {
            item.innerText = 'Нажми меня';
            item.classList.remove('active');
        }
    }

    if (el.innerText === 'Нажми меня') {
        el.innerText = 'Нажата';
        el.classList.add('active');
        wrapper.innerText = ++i;
    }
})
