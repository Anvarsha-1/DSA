class Stack{
    constructor(){
        this.q1 = []
        this.q2 = []
    }

    push(x){
        this.q2.push(x)

        while(this.q1.length){
            console.log(this.q1)
            this.q2.push(this.q1.shift())
        }

        let temp  = this.q1
        this.q1 = this.q2
        this.q2 =  temp
    }
    pop(){
     if(!this.q1.length) return nul;
     this.q1.shift()
    }
    display(){
        if(!this.q1.length) return null
        return console.log(this.q1)
    }
}

let stack =  new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)

stack.pop()

stack.display()

