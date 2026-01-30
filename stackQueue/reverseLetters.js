class Stack{
    constructor(){
        this.top = []
    }
    push(x){
      return this.top.push(x)
    }

    reverse(x){
        for(let val of x){
            this.push(val)
        }
       let char =""
       while(this.top.length){
        char+=this.top.pop()
       }
       return char
    }
    pop(){
        return this.top.pop()
    }
    print(){
        return console.log(this.top)
    }
}


let stack = new Stack()






console.log(stack.reverse("anvarsha"))

stack.print()