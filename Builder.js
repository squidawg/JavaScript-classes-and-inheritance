export function Builder(element) {
    this.element = element
}

Builder.prototype.isNum = function (element){
        return typeof element === 'number'
    }

Builder.prototype.plus = function (...number){
        this.element = this.isNum(this.element)?
            this.element += number.reduce(((a,b) => a + b), 0) : this.element.concat(number.join(''));
        return this

}
Builder.prototype.minus = function (...number){
    this.element = this.isNum(this.element)?
        this.element -= number.reduce(((a,b) => a +b), 0) : this.element.substring(0, this.element.length - number);
    return this
}
Builder.prototype.multiply = function (number){
        this.element = this.isNum(this.element)? this.element *= number: this.element.repeat(number);
        return this

    }

Builder.prototype.divide = function (number){
        this.element = this.isNum(this.element)? this.element /= number: this.element.substring(0, Math.floor(this.element.length / number));
        return this

    }

Builder.prototype.get = function (){
        return this.element
    }
