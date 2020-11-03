/*
Реализовать функцию bind которая должна работать так как показано в usage
Не использоапть ES 6
Подсказка - нужно использовать arguments, apply, closure (замыкания)
*/
const user = {
    firstName: "Bill"
};

function add(a, b, c) {
    return `${this.firstName} adds ${a + b + c}`;
}

function bind(fn, context){
    const argsArray = [];
    Array.from(arguments).slice(2).forEach(el => argsArray.push(el))
    return function() {
        Array.from(arguments).forEach(el => argsArray.push(el))
        return fn.apply(context, argsArray);
    }
}

// usage
console.log(bind(add, user)(1, 2, 3)); // Bill adds 6
console.log(bind(add, user, 1)(2, 3)); // Bill adds 6
console.log(bind(add, user, 1, 2, 3)()); // Bill adds 6
console.log(bind(add, user, 1, 2, 3)(4, 5, 6)); // Bill adds 6
