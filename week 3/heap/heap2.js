class Heap {
    constructor() {
        this.heap = []
    }

    insert(val) {
        this.heap.push(val)
        this.bubbleUp(this.heap.length - 1)
    }
    bubbleUp(i) {
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2)
            if (this.heap[parent] <= this.heap[i]) break
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]]
            i = parent
        }
    }

    build(arr) {
        this.heap = [...arr]
        let lastParent = Math.floor((this.heap.length - 2) / 2)
        for (let i = lastParent; i >= 0; i--) {
            this.bubbleDown(i)
        }
    }

    bubbleDown(i) {
        let length = this.heap.length
        while (true) {
            let left = 2 * i + 1
            let right = 2 * i + 2
            let smallest = i

            if (left < length && this.heap[left] < this.heap[smallest]) {
                smallest = left
            }
            if (right < length && this.heap[right] < this.heap[smallest]) {
                smallest = right
            }

            if (smallest === i) break

            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]]

            i = smallest
        }
    }
    remove(){
        if(this.heap.length===0)return null
        if(this.heap.length===1)return this.heap.pop()

        let min =  this.heap[0]
        this.heap[0] =  this.heap.pop()
        this.bubbleDown(0)
        return min
    }

    print() {
        return this.heap.length > 0 ? console.log(this.heap) : null
    }
}

let heap = new Heap()

heap.build([4, 6, 3])

heap.insert(10)
heap.insert(8)
heap.insert(7)
heap.insert(13)
heap.insert(5)


heap.print()