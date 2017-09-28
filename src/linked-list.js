const Node = require('./node');


class LinkedList {
    constructor() {

    	this.length = 0;
    	this._head = null;
    	this._tail = null;

    }

    append(data) {

    	var node = new Node(data);

    	if(this.length == 0){
    		this._head = node;
    		this._tail = node;
    		
    	}else{
    		node.prev = this._tail;
    		this._tail.next = node;
    		this._tail = node;
    	}
    	
    	this.length++;
    	return this;
    }

    head() {
    		return this._head.data;
    	}

    tail() {
    	return this._tail.data;
    	}

    at(index) {
    	if(this.length < index){
    		alert("Element with this index is not existing.");
    	}else{
    		var i = 0, data;
    		var node = this._head;
    		while(i != index){
    			node = node.next;
    			i++;
    		}
    	return node.data;
    	}
    }

    insertAt(index, data) {
    	var node = new Node(data);
    	var i = 0;
    	var currentNode = this._head;

      if(this.length==0){
        this._head = node;
    	this._tail = node;
      } else {
      while(i<index){
        i++;
        currentNode = currentNode.next;
      }
      node.prev = currentNode.prev;
      node.next = currentNode;
      currentNode.prev.next = node;
      currentNode.prev = node;
    }}

    isEmpty() {

    	if (this.length){
    		return false;    		
    	}else {
    		return true;
    	}

    }

    clear() {

    	this._head.data = null;
    	this._tail.data = null;
    	this.length = 0;
    	return this;
    }

    deleteAt(index) {
    	var i = 0, first, second, deletenode;
    	var currentNode = this._head;
            if(index===0){
                this._head.data = null;
                this._tail.data = null;
                this.length = 0;
            }else if (index ===1){
                    this.head = currentNode.next;
                    currentNode = deletenode;
                    deletenode = null;
                }else {
			          while(i != index){
			   currentNode= currentNode.next;
			   	i++;
			   }
       	
			first = currentNode.prev;
			second = currentNode.next;
			currentNode = deletenode;
			second.prev = first;
			first.next = second;
			deletenode = null;
        }
   		this.length--;
    	return this;
        }

    reverse() {
    	var head = this._head;
    	var current = this._head;
    	var tail = this._tail;
    	var tmp;
    	while(current){
    		tmp = current.next;
    		current.next = current.prev;
    		current.prev = tmp;
    		if(!tmp){
    			this._tail = head;
    			this._head = current;
    		}
    		current = tmp;
    	}
    	return this;
    }

    indexOf(data) {
    	var node = new Node(data);
    	node = this._head;
        var i = 0;
        while (i != this.length) {
            if (node.data == data) {
                return i;
            }
            node = node.next;
            i++;
        }
        return -1;
    }
}

module.exports = LinkedList;
