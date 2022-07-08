export class Tree {
    constructor(root, name = "") {
        this.name = "";
        this.root = root;
    }

    search(target) {
        return this.root.search(target)
    }

    preorderTraversal() {
        if (this.root) {
            this.root.preorderTraversal()
        }
    }

    inorderTraversal() {
        if (this.root) {
            this.root.inorderTraversal()
        }
    }

    postOrderTraversal() {
        if (this.root) {
            this.root.postOrderTraversal()
        }
    }
    findMaxHeight() {
       return  this.root.height();
    }

    getNodesAtDepth(depth) {
      return  this.root.getNodesAtDepth(depth)
    }

    addNode(data) {
        this.root.addNode(data);
    }

    deleteNode(data){
        this.root.deleteNode(data)
    }

}