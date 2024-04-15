export default class Oven {
    constructor(temp) {
        this._limit = 15;
        try {
            this.setMaxTemp(temp);
        } catch (error) {
            console.log(error.message);
        }
    }

    setMaxTemp(temp) {
        if (temp >= this._limit) {
            throw new Error("Температура превышает лимит: " + this._limit);
        } else {
            this._maxTemp = temp;
            console.log("Максимальная температура печи:", this._maxTemp);
        }
    }
}

const myOven = new Oven(10);
