(() => {
    console.log(word)
    var word = "parnship"
})() //returns undefined

(() => {
    console.log(word)
    let word = "parnship"
})() //returns a reference error
