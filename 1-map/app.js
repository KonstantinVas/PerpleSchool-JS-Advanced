'use strict';

let arr = [
    { id: 1, name: 'Вася' },
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
];

const uniqueIds = new Set(arr.map(el => {
    return el.id;
}))

const uniqueArr = Array.from(uniqueIds).map(id => {
    return arr.find(item => {
        return item.id === id;
    })
});

console.log(uniqueArr);
