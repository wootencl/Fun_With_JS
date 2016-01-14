//stack is already built into javascript. It is LIFO 

var stack = [];

//push
stack.push(1);
stack.push(2);
stack.push(3);
//pop
console.log(stack.pop());
console.log(stack.pop());


//queue is also essentially built in. You just use 'shift()' and your dequeue. It is FIFO

var queue = [];

//enqueue
queue.push("hello");
queue.push("world");

//dequeue
console.log(queue.shift());
console.log(queue.shift());