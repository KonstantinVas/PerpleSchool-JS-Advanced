'use strict';

const root = document.getElementById('root');

const currentYear = new Date().getFullYear();
const nextYear = new Date(`${currentYear + 1}/01/01`);

const currentTime = new Date();
let diffs = nextYear - currentTime;

const pluralize = (count, one, few, many) => {
    const rules = new Intl.PluralRules('ru-RU');
    const rule = rules.select(count);
    if (rule === 'one') return `${count} ${one}`;
    if (rule === 'few') return `${count} ${few}`;
    return `${count} ${many}`;
};

function timerNewYear(diff) {
    // Перевод в месяцы
    const monthLeft = Math.floor(diff / 1000 / 60 / 60 / 24 / 30);

    // Перевод в дни
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24) % 30;

    // Перевод в часы
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;

    // Перевод в минуты
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;

    // Перевод в секунды
    const secondsLeft = Math.floor(diff / 1000) % 60;

    root.innerHTML = `До нового года осталось 
        ${pluralize(monthLeft, 'месяц', 'месяца', 'месяцев')},  
        ${pluralize(daysLeft, 'день', 'дня', 'дней')}, 
        ${pluralize(hoursLeft, 'час', 'часа', 'часов')}, 
        ${pluralize(minutesLeft, 'минута', 'минуты', 'минут')}, 
        ${pluralize(secondsLeft, 'секунда', 'секунды', 'секунд')}`;
};

const interval = setInterval(() => {
    if (Math.floor(diffs / 1000) === 0) {
        root.innerHTML = templateMessage('Happy New Year!');
        clearInterval(interval)
    }
    timerNewYear(diffs -= 1000 - 20)
}, 1000);