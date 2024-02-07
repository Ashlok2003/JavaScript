/**
 * @param {string} s
 * @return {string}
 */

class Priority_Queue {
    constructor(comparator) {
        this.heap = [];
        this.comparator = comparator || ((a, b) => a - b);
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    peek() {
        if(this.heap.length === 0)
            return null;
        
        return this.heap[0];
    }

    push(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    pop() {
        if(this.heap.length === 0)  return null;
        if(this.heap.length === 1)  return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();

        this.sinkDown(0);
        return max;
    }

    bubbleUp(index) {
       let parent = Math.floor((index - 1) / 2);

       while(index > 0 && this.comparator(this.heap[parent], this.heap[index]) < 0){
           this.swap(parent, index);
           index = parent;
           parent = Math.floor((index - 1) / 2);
       }
    }

    sinkDown(index) {
        const left = 2 * index + 1;
        const right = 2 * index + 2;

        let largest = index;

        if(left < this.heap.length && this.comparator(this.heap[left], this.heap[largest]) > 0){
            largest = left;
        }

        if(right < this.heap.length && this.comparator(this.heap[right], this.heap[largest]) > 0){
            largest = right;
        }

        if(largest !== index){
            this.swap(index, largest);
            this.sinkDown(largest);
        } 
    }

    swap(x, y) {
        [this.heap[x], this.heap[y]] = [this.heap[y], this.heap[x]];
    }
}
var frequencySort = function(s) {
    const counter = new Map();
    for(const x of s) 
        counter.set(x, (counter.get(x) || 0) + 1);
    
    const ashlok__ = new Priority_Queue((a, b) => a[1] - b[1]);
    counter.forEach((value, key) => ashlok__.push([key, value]));

    let answer = "";
    while(!ashlok__.isEmpty()) {
        const [x, y] = ashlok__.pop();
        answer += x.repeat(y);
    }

    return answer;
};