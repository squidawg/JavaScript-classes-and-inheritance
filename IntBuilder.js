import {Builder} from "./Builder.js";

// Es6 syntax
class IntBuilder extends Builder {
    constructor(element) {
        super(element);
        this.element = this.isNum(element) ? element: 0;
    }

    static random(from, to){
        let min = Math.ceil(from)
        let max = Math.floor(to)
        this.element = Math.round(min + Math.random() * (max + 1 - min));
        return new IntBuilder(this.element)

    }

    mod(number){
        this.element %= number;
        return this

    }
}
