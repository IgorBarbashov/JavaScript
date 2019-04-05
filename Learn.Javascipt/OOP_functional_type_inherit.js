'use strict';

function Machine(power) {
    this._isWorking = false;
    this._power = power;

    this.enable = function() {
        this._isWorking = true;
        console.log('Родительский Start');
    };

    this.disable = function() {
        this._isWorking = true;
        console.log('Stop');
    };
};

function CoffeeMachine(power) {
    Machine.apply(this, arguments);
    var waterAmount = 0;

    this.setWaterAmount = function(amount) {
        waterAmount = amount;
        console.log('Load');
    };

    var parentEnable = this.enable.bind(this);

    this.enable = function() {
        parentEnable();
        console.log('Дочерний enable');
    };

    this.enable();
    console.log(this._isWorking);
    console.log(this._power);
};

var coffeeMachine = new CoffeeMachine(1000);

coffeeMachine.enable();
coffeeMachine.setWaterAmount(500);
coffeeMachine.disable();