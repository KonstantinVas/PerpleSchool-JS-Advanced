'use strict';

function checkBirthdayUser(birthday) {
    const now = new Date();
    const formatDate = new Date(birthday);
    let age = now.getFullYear() - formatDate.getFullYear();

    if (age < 14) {
        return `Вам только ${age} лет`;
    }

    if (age === 14) {
        const birthMonth = formatDate.getMonth();
        const currentMonth = now.getMonth();

        if (currentMonth < birthMonth) {
            age--;
            return `Вам только ${age} лет и ${currentMonth + 1} месяцев`;
        }

        if (currentMonth === birthMonth) {
            const birthDay = formatDate.getDate();
            const currentDay = now.getDate();

            if (currentDay < birthDay) {
                age--;
                return `Вам только ${age} лет, ${currentMonth + 1} месяцев`;
            }
        }
    }
    return 'Вам больше или 14 лет';
}

console.log(checkBirthdayUser('2010-11-12'));