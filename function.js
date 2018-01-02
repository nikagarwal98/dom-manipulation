let greaterThanAHundred = (num, func) => {
    return func(num) > 100
}
console.log(greaterThanAHundred(30, (num) => { return num * 5}))
