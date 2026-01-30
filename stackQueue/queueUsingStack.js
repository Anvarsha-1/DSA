class QueueUsingStack{
     constructor(){
        this.stackIn = []
        this.stackOut = []
     }
     enqueue(x){
        this.stackIn.push(x)
     }

     dequeue(){
        if(this.stackOut.length===0){
            while(this.stackIn.length){
                this.stackOut.push(this.stackIn.pop())
            }
         } return this.stackOut.pop() ?? null
     }
     print(){
       let rear = [...this.stackIn]
       let front = [...this.stackOut].reverse()
       console.log([...front,...rear])
     }
}

let queue = new QueueUsingStack()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)

console.log(queue.dequeue())
console.log(queue.dequeue())

queue.print()


