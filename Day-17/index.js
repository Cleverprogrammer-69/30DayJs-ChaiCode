// Task 1
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
const myNode1 = new Node(43)
console.log(myNode1.next)

// Task 2
class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0 
    }
    getSize(){
        return this.size
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
            
        }
        this.size++
    }
    remove(){
        let lastValue = null
        if(this.isEmpty()){
            console.log("List is empty")
            return null
        }
        if(this.head.next === null){
            lastValue = this.head.value
            this.head = null
        }
        else {
            let curr = this.head
            while(curr.next.next){
                curr = curr.next
            }
            lastValue = curr.next.value
            curr.next = null
        }
        this.size--
        return lastValue
    }
    removeFirst(){ 
        const removedNode = this.head
        if(this.isEmpty()){
            console.log("List is Empty")
            return null
        } else {
           
            this.head = this.head.next
            removedNode.next = null
        }
        this.size--
        return removedNode.value
    }
    getFirst(){
        if(this.isEmpty()){
            return null
        } else {
            return this.head?.value
        }
    }
    getLast(){
        let curr = this.head
        if(this.isEmpty()){
            console.log("List is empty")
            return null
        } else {
            while(curr.next.next){
                curr = curr.next
            }
        }
        return curr.next.value
    }
    print(){
        if(this.isEmpty()){
            console.log("List is Empty")
        } else {
            let curr = this.head
            let listValues = []
            while(curr){
                listValues.push(curr.value) 
                curr = curr.next
            }
            console.log(listValues.join(" -> "))
        }
    }
}
const l1 = new LinkedList()
console.log(l1.isEmpty())
l1.append(1)
l1.append(2)
l1.append(3)
console.log(l1.getSize())
l1.print()
l1.remove()
l1.print()
l1.getLast()

// Task 3
class Stack{
    #list
    constructor(){
        this.#list = new LinkedList()
    }
    push(value){
        this.#list.append(value)
    }
    pop(){
        return this.#list.remove()
    }
    peek(){
        return this.#list.getLast()
    }
    getSize(){
        return this.#list.size
    }
    isEmpty(){
        return this.#list.isEmpty()
    }
}
const s1 = new Stack()
s1.push(55)
s1.push(65)
s1.push(75)
s1.peek()
console.log("popedValue: ",s1.pop())
s1.peek()
// Task 4

let city = "Istanbul"
let reversedCity = ""
const s2 = new Stack()
for (let i = 0; i < city.length; i++){
    s2.push(city[i])
}
s2.peek()
console.log(s2.getSize())
while(!s2.isEmpty()){
    reversedCity += s2.pop()
}
console.log(reversedCity)
// Task 5

class Queue{
    #list
    constructor(){
        this.#list = new LinkedList()
    }
    enqueue(value){
        this.#list.append(value)
    }
    dequeue(){
        return this.#list.removeFirst()
    }
    front(){
        return this.#list.getFirst()
    }
    isEmpty(){
        return this.#list.isEmpty()
    }
    getSize(){
        return this.#list.getSize()
    }
}
const q1 = new Queue()
q1.enqueue("John")
q1.enqueue("Marcos")
q1.enqueue("Faizan")
q1.dequeue()
console.log(q1.front())

//Task 6
const printerQueue = new Queue();

printerQueue.enqueue("Doc1.pdf");
printerQueue.enqueue("budget.xlsx");
printerQueue.enqueue("Family.png");

console.log("Size of the queue: ", printerQueue.getSize())
console.log("Front of the queue:", printerQueue.front());
console.log("Printing:", printerQueue.dequeue());
console.log("Front of the queue after dequeue:", printerQueue.front());
console.log("Is the queue empty?", printerQueue.isEmpty() ? "Yes" : "No");
console.log("Printing:", printerQueue.dequeue());
console.log("Printing:", printerQueue.dequeue());
console.log(
  "Is the queue empty after processing all jobs?",
  printerQueue.isEmpty() ? "Yes" : "No"
);
// Task 7

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        const queue = new Queue();
        queue.enqueue(root);

        while (!queue.isEmpty()) {
            const current = queue.dequeue();

            if (current.left === null) {
                current.left = newNode;
                return;
            } else {
                queue.enqueue(current.left);
            }

            if (current.right === null) {
                current.right = newNode;
                return;
            } else {
                queue.enqueue(current.right);
            }
        }
    }

    inOrderTraversal(root = this.root, result = new LinkedList()) {
        if (root !== null) {
            this.inOrderTraversal(root.left, result);
            result.append(root.value);
            this.inOrderTraversal(root.right, result);
        }
        return result;
    }
}

const tree = new BinaryTree();

tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
let result = new LinkedList()
result = tree.inOrderTraversal()
console.log(result.print()); // Output: 40 -> 20 -> 50 -> 10 -> 30
