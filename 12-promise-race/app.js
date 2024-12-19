'use strict';

async function race(arrayPromise) {
    return new Promise((resolve, reject) => {
        arrayPromise.forEach(item => {
            Promise.resolve(item)
                .then(resolve)
                .catch(error => reject(new Error(error)));
        })
    })
}
(async () => {
    const promise1 = new Promise(resolve => {
        setTimeout(() => {
            resolve('Первый');
        }, Math.random() * 2000);
    })

    const promise2 = new Promise(resolve => {
        setTimeout(() => {
            resolve('Второй');
        }, Math.random() * 2000)
    })
    const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Третий');
        }, Math.random() * 2000)
    })

    try {
        const res = await race([promise1, promise2, promise3]);
        console.log('Главный промис выполнен с результатом:', res);
    } catch (error) {
        console.log('Главный промис отклонен с ошибкой:', error);
    }
})()