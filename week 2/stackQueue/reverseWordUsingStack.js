
function reverseWord(s){
    let splitS  = s.split(" ")
    let stack = []
    for(let word of splitS){
        stack.push(word)
    }
    console.log(stack)
    let answer = ""

    while(stack.length){
        let current = stack.pop()

        if(current){
            answer+=" "+current
        }
    }return answer.trim()
}

let s = "the word is joker"
console.log(reverseWord(s))


