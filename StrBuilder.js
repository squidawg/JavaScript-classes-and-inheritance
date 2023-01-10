import {Builder} from "./Builder.js";

function StringBuilder(element){
    Builder.call(this, element);
    this.element = this.isString(element) ? element: '';

}

StringBuilder.prototype = Object.create(Builder.prototype)

StringBuilder.prototype.remove = function (element){
    let temp = [...this.element];
    this.element = temp.map(elem => elem !== element? elem:'').join('');
    return this
}

StringBuilder.prototype.sub = function (from, to){
    this.element = this.element.substring(from, to + 1);
    return this
}
