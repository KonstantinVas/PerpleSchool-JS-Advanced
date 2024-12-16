'use strict';

const button = document.querySelector('.button');


function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Ошибочка'))
        }
        navigator.geolocation.getCurrentPosition(position => {
            resolve(doSomething(position));
        })
    })
}

function doSomething(position) {
    const root = document.querySelector('.root');
    root.innerHTML = `<h1>Ваша широта ${position.coords.latitude} и долгота ${position.coords.longitude}</h1>`;
    return position;
}

getCurrentLocation().then(data => console.log(data)).catch(error => console.error(error));