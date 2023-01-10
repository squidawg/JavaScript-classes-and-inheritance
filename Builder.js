export function Builder(element) {
    this.element = element
}

Builder.prototype.isNum = function (element) {
    return typeof element === 'number'
}

Builder.prototype.isString = function (element) {
    return typeof element === 'string'
}

Builder.prototype.plus = function (...number) {
    if(this.isNum(this.element) || this.isString(this.element)){
        this.element =
            number.reduce(((a,b) => a + b), this.element);
    }
    return this

}

Builder.prototype.minus = function (...number) {
    if(this.isNum(this.element)){
        this.element = this.element -= number.reduce(((a,b) => a +b), 0)
    }
    else if (this.isString(this.element)){
        this.element = this.element.substring(0, this.element.length - number[0])
    }
    return this

}

Builder.prototype.multiply = function (number) {
    if(this.isNum(this.element)){
        this.element = this.element *= number
    }
    else if (this.isString(this.element)){
        this.element = this.element.repeat(number)
    }
    return this
}

Builder.prototype.divide = function (number) {
    if(this.isNum(this.element)){
        this.element = this.element /= number
    }
    else if (this.isString(this.element)){
        this.element = this.element.substring(0, Math.floor(this.element.length / number))
    }
    return this
}

Builder.prototype.get = function () {
        return this.element
}
