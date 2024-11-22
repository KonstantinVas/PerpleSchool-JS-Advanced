'use strict';

class Car {
    #make
    #model
    #_run

    constructor(make, model, run) {
        this.#make = make;
        this.#model = model;
        this.#run = run;
    }

    get #run() {
        return this.#_run;
    }

    set #run(run) {
        this.#_run = run;
    }

    changeRun(run) {
        if (run < 0) {
            throw new Error('Пробег не может быть отрицательным');
        }
        return this.#run = run;
    }

    info() {
        return `Марка автомобиля ${this.#make}, модель ${this.#model} с пробегом ${this.#run}`;
    }
}

const car = new Car('Audi', 'A3', 23000);
console.log(car);
console.log(car.info());
car.changeRun(11000);
console.log(car);
console.log(car.info());