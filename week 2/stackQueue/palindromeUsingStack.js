function palindrome(s) {
    let stack = []
    for (let char of s) {
        stack.push(char)
    }
    console.log(stack)

    for (let char of s) {
        if (char !== stack.pop()) {
            console.log(stack.pop())
            return false
        }
    } return true
}
let s = "mole"
console.log(palindrome(s))