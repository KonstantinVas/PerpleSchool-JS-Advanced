export class Task {
    constructor(task) {
        this.task = task;
    }
    run(name, surname) {
        console.log(`Пользователь с именем ${name} и фамилией ${surname} выполняет задачу ${this.task}`);
    }
}