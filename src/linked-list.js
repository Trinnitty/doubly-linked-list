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

    }

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
