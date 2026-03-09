class Stack{
    constructor(){
        this.stack = []
    }

    push(x){
        this.stack.push(x)
    }

    pop(){
        if(this.stack.length<0) return null
        this.stack.pop()
    }

    SortStack(){
        if(this.stack.length<0) return null
        let input = this.stack;
        let tempStack = []
        while(input.length){
            let temp = input.pop()
            while(tempStack.length>0 && tempStack[tempStack.length-1]>temp){
                input.push(tempStack.pop())
            }
            tempStack.push(temp)
        }this.stack = tempStack
        
    }
    print(){
        console.log(this.stack)
    }

}


let stack = new Stack()

stack.push(5)
stack.push(3)
stack.push(7)
stack.push(9)
stack.push(0)
console.log("before sorting")
stack.print()
stack.SortStack()
console.log("after sorting")
stack.print()
