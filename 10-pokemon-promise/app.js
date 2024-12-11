'use strict';

function request(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибочка');
            }
            return response.json();
        })
        .then(({ abilities }) => fetch(abilities[0].ability.url))
        .then(data => data.json())
        .then(res => {
            const ability = document.createElement('div');
            const body = document.querySelector('body');
            ability.innerHTML = res.effect_entries[0].effect;
            body.appendChild(ability);
        })
        .catch(error => {
            console.log(error.message);
        })
}

request('https://pokeapi.co/api/v2/pokemon/ditto');