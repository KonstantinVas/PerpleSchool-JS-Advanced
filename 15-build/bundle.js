(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    class Task {
        constructor(task) {
            this.task = task;
        }
        run(name, surname) {
            console.log(`Пользователь с именем ${name} и фамилией ${surname} выполняет задачу ${this.task}`);
        }
    }

    class Users {
        constructor(name, surname) {
            this.name = name;
            this.surname = surname;
        }

        do(method) {
            method.run(this.name, this.surname);
        }
    }

    const task1 = new Task('Помыть пол');
    const task2 = new Task('Заняться обучением');
    const users = new Users('Василий', 'Иванов');

    users.do(task1);
    users.do(task2);

}));
