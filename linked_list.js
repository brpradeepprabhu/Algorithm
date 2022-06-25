class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }

    get_data() {
        return this.val;
    }

    set_data(val) {
        this.val = val;
    }

    get_next() {
        return this.next;
    }

    set_next(nextVal) {
        this.next = nextVal;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.count = 0
    }

    get_count() {
        return this.count;
    }

    insert(data) {
        let node = new Node(data);
        node.set_next(this.head);
        this.head = node;
        this.count += 1;
    }

    find(data) {
        let temp = this.head;
        while (temp != null) {
            if (temp.get_data() === data) {
                return temp;
            } else {
                temp = temp.get_next();
            }
        }
        return null;
    }
  deleteAt(index) {
        if(index > this.count-1) {
            return;
        }
        if(index == 0) {
            this.head = this.head.get_next();
        }
        else {
            let temp_index = 0;
             let node = this.head;
             while (temp_index < index-1) {
                 node = node.get_next();
                 temp_index +=1;
             }
             node.set_next(node.get_next().get_next())
        }

  }
    print_data() {
        let temp = this.head;
        while (temp != null) {
            console.log("Node items", temp.get_data());
            temp = temp.get_next();
        }
    }
}

var list = new LinkedList();
list.insert(22);
list.insert(33);
list.insert(45);
list.insert(43);
list.print_data();


console.log("find node 33", list.find(33));

console.log("delete node 3", list.deleteAt(1))

list.print_data();