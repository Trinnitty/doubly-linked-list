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
    	return node;
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
    	
    	if(this.length === 0){
    		this._head = node;
    		this._tail = node;
    	}else if (index === this.length){
    		node.prev = this._tail;
    		this._tail.next = node;
    		this._tail = node;
    	}
    		else {
		    	var cur = this.at(index),
		    	prevcur = cur.prev,
		    	nextcur = cur.next;

		    	node.prev = prevcur;
		    	node.next = nextcur;
		    	prevcur.next = node;
		    	nextcur.prev = node;
}
    	this.length++;
    	return this;
    }

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

    }

    deleteAt(index) {
    	var i = 0, first, second, deletenode;
    	var currentNode = this._head;
      
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
   		this.length--;
    	return this;
        }

    reverse() {}

    indexOf(data) {
    	

    }
}

module.exports = LinkedList;
