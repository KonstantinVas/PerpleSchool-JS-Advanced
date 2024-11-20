'use strict';

const Persone = function (race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}

Persone.prototype.speac = function (language, name) {
    return `Приветсвую! Я ${name} и говорю на языке ${language}`;
}

const Ork = function (weapon) {
    this.weapon = weapon;
}

Ork.prototype = Object.create(Persone.prototype);

Ork.prototype.hit = function () {
    return 'Удар';
}

const Elf = function (spell) {
    this.spell = spell;
}

Elf.prototype = Object.create(Persone.prototype);

Elf.prototype.createSpell = function () {
    return 'Кастует заклинание';
}

const personage = new Persone();
const ork = new Ork('Булава');
const elf = new Elf('Заклинание');

console.log(ork.speac('Орков', 'Орк Вася'));
console.log(elf.speac('Эльфов', 'Эльф Настя'));

