'use strict';

class Billing {

    constructor(amount) {
        this.amount = amount;
    }

    calculateTotal(method) {
        return method.calculateTotal();
    }
}

class FixedBilling extends Billing {
    constructor(amount) {
        super(amount);
    }

    calculateTotal() {
        return `Всего на счету ${this.amount}$`;
    }
}

class HourBilling extends Billing {
    constructor(hour, amount) {
        super(amount);
        this.hour = hour;
    }

    calculateTotal() {
        return `Почасовая стоимость работы ${this.amount * this.hour}$, всего ${this.hour} часа`;
    }
}

class ItemBilling extends Billing {
    constructor(item, amount) {
        super(amount);
        this.item = item;
    }

    calculateTotal() {
        return `Проектная стоимость работы ${this.amount * this.item}$, всего ${this.item} проекта`;
    }
}

const billingFix = new Billing().calculateTotal(new FixedBilling(25));
const billingHour = new Billing().calculateTotal(new HourBilling(2, 25));
const billingItem = new Billing().calculateTotal(new ItemBilling(5, 25));
console.log(billingFix);
console.log(billingHour);
console.log(billingItem);