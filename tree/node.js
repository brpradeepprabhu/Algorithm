export class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    search(target) {
        if (this.data === target) {
            console.log("found!!");
            return this;
        }
        if (this.left && this.data > target) {
            return this.left.search(target)
        }
        if (this.right && this.data < target) {
            return this.right.search(target)
        }

        return null;
    }

    preorderTraversal() {
        console.log(this.data)
        if (this.left) {
            this.left.preorderTraversal();
        }
        if (this.right) {
            this.right.preorderTraversal();
        }
    }

    inorderTraversal() {
        if (this.left) {
            this.left.inorderTraversal();
        }
        console.log(this.data)
        if (this.right) {
            this.right.inorderTraversal();
        }
    }

    postOrderTraversal() {
        if (this.left) {
            this.left.postOrderTraversal();
        }

        if (this.right) {
            this.right.postOrderTraversal();
        }
        console.log(this.data)
    }

    height(h = 0) {
        const leftHeight = this.left ? this.left.height(h + 1) : h;
        const rightHeight = this.right ? this.right.height(h + 1) : h;
        return Math.max(leftHeight, rightHeight)
    }

    getNodesAtDepth(depth, nodes = []) {
        if (depth === 0) {
            nodes.push(this.data)
            return nodes;
        }
        if (this.left) {
            this.left.getNodesAtDepth(depth - 1, nodes)
        } else {
            let num = 2 ** (depth - 1);
            for (let i = 0; i < num; i++) {
                nodes.push(null)
            }
        }
        if (this.right) {
            this.right.getNodesAtDepth(depth - 1, nodes)
        } else {
            let num = 2 ** (depth - 1);
            for (let i = 0; i < num; i++) {
                nodes.push(null)
            }
        }
        return nodes;
    }

    addNode(data) {
        if (this.data == data) {
            return;
        }
        if (this.data > data) {
            if (!this.left) {
                this.left = new Node(data);
            } else {
                this.left.addNode(data);
                this.left = this.left.checkImbalanceExist();
            }
        }
        if (this.data < data) {
            if (!this.right) {
                this.right = new Node(data);
            } else {
                this.right.addNode(data)
                this.right = this.right.checkImbalanceExist();
            }
        }

    }

    findMin() {
        if (this.left) {
            return this.left.findMin();
        }
        return this.data;
    }

    /**
     *  Deleting the node in the tre by using RTFM
     *
     * @param data
     * @returns {Node|null}
     */
    deleteNode(data) {
        if (this.data === data) {
            if (this.left && this.right) {
                let minValue = this.right.findMin();
                this.data = minValue;
                this.right = this.right.deleteNode(data);
            } else {
                return this.left || this.right;
            }
        }
        if (this.data > data && !this.left) {
            this.left = this.left.deleteNode(data);
        }
        if (this.data < data && !this.right) {
            this.right = this.right.deleteNode(data);
        }

        return this.checkImbalanceExist();
    }

    rotateRight() {
        let pivot = this.left;
        let attachNode = pivot.right;
        this.left = attachNode;
        pivot.right = this;
        return pivot
    }

    rotateLeft() {
        let pivot = this.right;
        let attachNode = pivot.left;
        this.right = attachNode
        pivot.left = this;
        return pivot;
    }

    getHeightDiff() {
        let leftHeight = 0;
        if (this.left) {
            leftHeight = this.left.height(0);
        }

        let rightHeight = 0;
        if (this.right != null) {
            console.log(this.right)
            rightHeight = this.right.height(0);
        }
        return leftHeight - rightHeight;
    }

    checkImbalanceExist() {
        if (this.getHeightDiff() > 1) {
            if (this.left.getHeightDiff() > 0) {
                return this.rotateRight()
            } else {
                this.left = this.left.rotateLeft();
                return this.rotateRight();
            }
        }

        if (this.getHeightDiff() < -1) {
            if (this.right.getHeightDiff() < 0) {
                return this.rotateLeft()
            } else {
                this.right = this.right.rotateRight();
                return this.rotateLeft();
            }

        }
        return this;
    }

    rebalance() {
        if (this.left) {
            this.left.rebalance();
            this.left = this.left.checkImbalanceExist()
        }
        if (this.right) {
            this.right.rebalance();
            this.right = this.right.checkImbalanceExist();
        }
        return this;
    }



}

