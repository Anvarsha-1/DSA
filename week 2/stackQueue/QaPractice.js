//create a stack push,pop,peek,display

// class Stack {
//     constructor() {
//         this.stack = []
//         this._size = 0
//     }
//     push(val) {
//         this._size++
//         this.stack.push(val)
//         return
//     }
//     pop() {
//         if (this.isEmpty()) return false
//         this._size--
//         return this.stack.pop()

//     }
//     peek() {
//         if (this.isEmpty()) return false

//         return this.stack[this.stack.length - 1]
//     }
//     top() {
//         if (this.isEmpty()) return false
//         return this.stack[0]
//     }
//     isEmpty() {
//         return this.stack.length === 0
//     }
//     size() {
//         if (this.isEmpty()) return 0
//         return this._size
//     }
//     display() {
//         if (this.isEmpty()) return false
//         console.log(this.stack)
//     }
// }

// let stack = new Stack()

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.push(50)

// stack.pop()

// console.log(stack.size())

// stack.display()

//LinkedList stack Implementation

// class Node{
//     constructor(val){
//         this.val = val
//         this.next = null
//     }
// }

// class Stack{
//     constructor(){
//         this.top = null
//     }

//     push(val){
//         let node = new Node(val)
//         node.next = this.top
//         this.top = node
//     }
//     pop(){
//         if(!this.top) return false
//         let removed = this.top
//         this.top = this.top.next
//         return removed
//     }
//     display(){
//         if(!this.top) return false
//         let result = ""
//         let cur = this.top
//         while(cur){
//             result+=cur.val+"->"
//             cur= cur.next
//         }
//         console.log(result,"null")
//     }
// }

// let stack = new Stack()

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.push(50)

// stack.pop()

// stack.display()

//check Valid parentheses

// function isValid(str){
//     let stack = []
//     let map = {
//         ")":"(",
//         "]":"[",
//         "}":"{"
//     }
//     for(let char of str){
//         if(char==="(" || char==="[" || char==="{"){
//             stack.push(char)
//         }else{
//             if(stack.pop()!==map[char]){
//                 return false
//             }
//         }
//     }return stack.length===0
// }

// let str = ")("
// console.log(isValid(str))

//reverse a string using stack

// function reverse(str){
//     let stack = []
//     let res = ""
//     for(let char of str){
//         stack.push(char)
//     }
//     for(let char of str){
//         res+=stack.pop()
//     }
//     return res
// }

// console.log(reverse("hello"))

//find Next Greater Element and return result

// let arr = [3,5,1,7,8]

// function Greater(arr){
//     let result = []
//   for(let i=0;i<arr.length;i++){
//     let found =-1

//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]>arr[i]){
//             found = arr[j]
//             break
//         }
//     }result.push(found)
//   }return result
// }

// console.log(Greater(arr))


//create a stack push,pop,getMin in O(1)

// class Stack{
//     constructor(){
//     this.stack = []
//     this.minStack = []
//     }
//     push(val){
//         this.stack.push(val)
//         if(this.minStack.length===0){
//             this.minStack.push(val)
//         }else{
//             let min = Math.min(this.minStack[this.minStack.length-1],val)
//             this.minStack.push(min)
//         }
//     }
//     pop(){
//         if(this.stack.length===0) return false
//         this.stack.pop()
//     }
//     getMin(){
//         if(this.minStack.length===0)return false
//         return this.minStack[this.minStack.length-1]
//     }
// }

// let stack =new Stack()

// stack.push(1)
// stack.push(5)
// stack.push(6)
// stack.push(3)


// console.log(stack.getMin())

//sort stack using stack

// class Stack {
//     constructor() {
//         this.stack = []
//         this._size = 0
//     }
//     push(val) {
//         this._size++
//         this.stack.push(val)
//         return
//     }
//     pop() {
//         if (this.isEmpty()) return false
//         this._size--
//         return this.stack.pop()

//     }
//     peek() {
//         if (this.isEmpty()) return false

//         return this.stack[this.stack.length - 1]
//     }
//     top() {
//         if (this.isEmpty()) return false
//         return this.stack[0]
//     }
//     isEmpty() {
//         return this.stack.length === 0
//     }
//     size() {
//         if (this.isEmpty()) return 0
//         return this._size
//     }
//     sort(){
//         let temp = []
//         while(this.stack.length){
//             let current = stack.pop()
//             while(temp.length && temp[temp.length-1]>current){
//                 stack.push(temp.pop())
//             }
//             temp.push(current)
//         }
//         return this.stack = temp
//     }
//     display() {
//         if (this.isEmpty()) return false
//         console.log(this.stack)
//     }
// }

// let stack = new Stack()

// stack.push(50)
// stack.push(70)
// stack.push(20)
// stack.push(10)
// stack.push(30)

// stack.sort()

// stack.display()


//Queue implementation

// class queue{
//     constructor(){
//         this.items = []
//         this.head = 0
//         this.tail = 0
//     }
//     enqueue(val){
//         this.items[this.tail++] = val
//     }
//     dequeue(){
//         if(this.items.length===0)return false
//         let val = this.items[this.head]
//         delete this.items[this.head]
//         this.head++
//         return val
//     }
//     display(){
//         if (this.items.length === 0) return false
//         return console.log(this.items)
//     }
// }


// let q =new queue()

// q.enqueue(10)
// q.enqueue(60)
// q.enqueue(30)
// q.enqueue(20)
// q.enqueue(80)

// q.dequeue()

// q.display()

//Implement a queue using linked list

// class Node{
//     constructor(val){
//         this.val = val
//         this.next = null
//     }
// }

// class Enqueue{
//     constructor(){
//         this.head = null
//         this.tail = null
//     }
//     enqueue(val){
//         let node = new Node(val)
//         if(!this.head){
//             this.head = this.tail = node
//             return 
//         }
//         this.tail.next = node
//         this.tail = node
//     }
//     dequeue(){
//         if(!this.head) return false
//         let v = this.head
//         this.head = this.head.next
//         if(!this.head===this.tail) this.tail = null
//         return v
//     }
//     front(){
//         if(!head) return false
//         return this.head.val
//     }

//     display(){
//         if(!this.head)return false
//         let cur = this.head
//         let result = ""

//         while(cur){
//             result+=cur.val+"->"
//             cur= cur.next
//         }
//         return console.log(result+"null")
//     }
// }

// let q = new Enqueue()

// q.enqueue(10)
// q.enqueue(60)
// q.enqueue(40)
// q.enqueue(80)
// q.enqueue(20)


// q.display()

//Implement queue using stack

// class queue{
//     constructor(){
//         this.stack1 = []
//         this.stack2 = []
//     }
//     enqueue(val){
//         this.stack1.push(val)
//     }
//     dequeue(){
//         if(this.stack1.length===0)return false

//         if (this.stack2.length === 0) {
//         while(this.stack1.length){
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
//         return  this.stack2.pop()
//     }
//     display() {
//             console.log([...this.stack2.slice().reverse(),...this.stack1])
//         }
// }

// let q = new queue()

// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)
// q.enqueue(40)

// q.dequeue()

// q.display()

//reverse first k element

// function reverseK(queue,k){
//     let stack = []
//     for(let i=0;i<k;i++){
//         stack.push(queue.shift())
//     }
//     while(stack.length){
//         queue.push(stack.pop())
//     }
//     let remaining = queue.length-k

//     for(let i=0;i<remaining;i++){
//          queue.push(queue.shift())
//     }return queue = queue
// }

// console.log(reverseK([20,40,69,48],2))

function generateBinary(n){
   let queue = ["1"] 
   for(let i=0;i<n;i++){
    let current = queue.shift()
    console.log(current)
    queue.push(current+"0")
    queue.push(current+"1")
   }
}
console.log(generateBinary(10))