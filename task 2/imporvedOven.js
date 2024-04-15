import Oven from "./oven.js";

class ImprovedOven extends Oven {
    constructor(maxTemp) {
        super(maxTemp);
        this._currentTemp = 0;
        this._intervalId = null;
        this._isOn = false;
        this._maxTemp = maxTemp;
    }

    setMaxTemp(temp) {
        if (temp >= this._limit) {
            throw new Error("Температура превышает лимит: " + this._limit);
        } else {
            this._maxTemp = temp;
        }
    }

    turnOn() {
        try {
            super.setMaxTemp(this._maxTemp);
            this._isOn = true;
            console.log("Печь включена. Начало работы.");
            this._intervalId = setInterval(() => {
                if (this._currentTemp < this._maxTemp) {
                    this._currentTemp++;
                    console.log("Температура печи:", this._currentTemp);
                } else {
                    console.log("Полный нагрев печи.");
                    this.turnOff();
                }
            }, 500);
        } catch (error) {}
    }

    turnOff() {
        if (this._isOn) {
            console.log("Печь выключена.");
            clearInterval(this._intervalId);
            this._intervalId = setInterval(() => {
                if (this._currentTemp > 0) {
                    this._currentTemp--;
                    console.log("Температура печи:", this._currentTemp);
                } else {
                    console.log("Печь остыла.");
                    clearInterval(this._intervalId);
                }
            }, 500);
            this._isOn = false;
        } else {
            console.log('Печь уже выключена.');
        }
    }
}

// Создаем экземпляр улучшенной плиты
let myImprovedOven = new ImprovedOven(20);
myImprovedOven.turnOn();
