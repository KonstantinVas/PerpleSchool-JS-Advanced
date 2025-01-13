import { Task } from "./task.js";
import { Users } from "./users.js";

const task1 = new Task('Помыть пол');
const task2 = new Task('Заняться обучением');
const users = new Users('Василий', 'Иванов');

users.do(task1);
users.do(task2);