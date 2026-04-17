// Find the nth smallest element in an Array using Max Heap

class Heap {
    constructor() {
        this.heap = []
    }
    left(i) {
        return Math.floor((2 * i) + 1)
    }
    right(i) {
        return Math.floor((2 * i) + 2)
    }
    parent(i) {
        return Math.floor((i - 1) / 2)
    }
    insert(val) {
        this.heap.push(val)
        this.bubbleUp(this.heap.length - 1)
    }
    bubbleUp(i) {
        while (i > 0) {
            let parent = this.parent(i)
            if (this.heap[parent] > this.heap[i]) break
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]]
            i = parent
        }
    }
    build(arr) {
        this.heap = [...arr]
        let lastParent = Math.floor((this.heap.length - 2) / 2)
        for (let i = lastParent; i >= 0; i--) {
            {
                this.bubbleDown(i)
            }
        }
    }
    bubbleDown(i) {
        let length = this.heap.length

        while (true) {
            let left = this.left(i)
            let right = this.right(i)
            let largest = i

            if (left < length && this.heap[left] > this.heap[largest]) {
                largest = left
            }
            if (right < length && this.heap[right] > this.heap[largest]) {
                largest = right
            }

            if (largest === i) break

            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]]

            i = largest
        }
    }
    remove() {
        if (this.heap.length === 0) return null
        if (this.heap.length === 1) return this.heap.pop()

        let max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown(0)

        return max
    }
    peek(){
        if(this.heap.length===0)return null
        return this.heap[0]
    }
    size(){
       return this.heap.length>0 ? this.heap.length : 0
    }
    nthSmallestElm(arr,n){
        if(n>arr.length || n<0) return null
        let heap = new Heap()

        for(let val of arr){
            heap.insert(val)
            if(heap.size()>n){
                heap.remove()
            }
        }
        return heap.peek()
    }
}

let heap = new Heap()

console.log(heap.nthSmallestElm([10,8,7,20,5],2))