'use strict';

function dungeonsAndDragons(dice) {
    const initDice = 1;
    const arr = [
        { d4: 4 },
        { d6: 6 },
        { d8: 8 },
        { d10: 10 },
        { d12: 12 },
        { d16: 16 },
        { d20: 20 },
    ];
    const searchDice = arr.find(item => {
        const key = Object.keys(item);
        return key[0] === dice;
    });
    if (!searchDice) {
        return 'Нет такого Dice'
    };
    return Math.floor(Math.random() * (Object.values(searchDice) - initDice + initDice) + initDice);
}

console.log(dungeonsAndDragons('d4'));