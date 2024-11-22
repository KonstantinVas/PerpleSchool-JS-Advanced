'use strict';

class Persone {
    constructor(race, name, language) {
        this.race = race;
        this.name = name;
        this.language = language;
    }

    spaec() {
        return `Приветсвую! Я ${this.name} и говорю на языке ${this.language}`
    }
}

class Ork extends Persone {
    constructor(race, name, language, weapon) {
        super(race, name, language);
        this.weapon = weapon;
    }

    hit() {
        console.log(`Удар ${this.weapon}`);
    }

    spaec() {
        console.log(`Здорово! Я ${this.name} и говорю на языке ${this.language}`);
        return this;
    }
}

class Elf extends Persone {
    constructor(race, name, language, spell) {
        super(race, name, language);
        this.spell = spell;
    }

    createSpell() {
        console.log(`Наносит ${this.spell}`);
    }

    spaec() {
        console.log(`Приветствую мой друг! Я ${this.name} и говорю на языке ${this.language}`);
        return this;
    }
}

const ork = new Ork('Ork', 'Вася', 'Орков', 'Меч');
const elf = new Elf('Elf', 'Настя', 'Эльфов', 'Заклинание');

ork.spaec().hit();
elf.spaec().createSpell();