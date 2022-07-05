export class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right =null;
    }
    search(target){
        if(this.data === target) {
            console.log("found!!");
            return this;
        }
        if(this.left && this.data>target){
            return  this.left.search(target)
        }
        if (this.right && this.data< target) {
            return  this.right.search(target)
        }

        return  null;
    }

    preorderTraversal() {
        console.log(this.data)
        if(this.left) {
            this.left.preorderTraversal();
        }
        if(this.right) {
            this.right.preorderTraversal();
        }
    }

    inorderTraversal(){
        if(this.left) {
            this.left.inorderTraversal();
        }
        console.log(this.data)
        if(this.right) {
            this.right.inorderTraversal();
        }
    }

    postOrderTraversal(){
        if(this.left) {
             this.left.postOrderTraversal();
        }

        if(this.right) {
            this.right.postOrderTraversal();
        }
        console.log(this.data)
    }
}

