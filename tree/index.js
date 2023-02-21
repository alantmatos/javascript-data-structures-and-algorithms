
// // Binary Search Tree

class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // insert(data) {
    //     let newNode = new Node(data);
    //     if (!this.root) {
    //         this.root = newNode;
    //         return this
    //     } else {
    //         let current = this.root;
    //         while (true) {
    //             if (data === current.value) return undefined;
    //             if (data < current.data) {
    //                 if (current.left === null) {
    //                     current.left = newNode;
    //                     return
    //                 } else {
    //                     current = current.left;
    //                 }
    //             } else if (data > current.data) {
    //                 current.right = newNode;
    //                 return
    //             } else {
    //                 current = current.right;
    //             }
    //         }
    //     }
    // }


    // // easier to read solution
    insert(data) {

        const newNode = new Node(data);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let currentNode = this.root;

        while (true) {
            if (currentNode.data === data) {
                return null;
            }

            if (currentNode.data > data && currentNode.left) {
                currentNode = currentNode.left;
                continue;
            }

            if (currentNode.data < data && currentNode.right) {
                currentNode = currentNode.right
                continue;
            }

            // at this point, we know it reached to leaf for new node.
            if (currentNode.data > data) {
                currentNode.left = newNode;
            }

            if (currentNode.data < data) {
                currentNode.right = newNode;
            }

            return this;
        }
    }


    // // recursive call insert method, ideal.
    // insert(data){
    //     var newNode = new Node(data);
    //     if (traverse(this.root)) this.root = newNode;
     
    //     function traverse(current){
    //         if (current === null) return true;
     
    //         if (newNode.data > current.data) {
    //             if (traverse(current.right)) current.right = newNode;
    //         } else if (newNode.data < current.data) {
    //             if (traverse(current.left)) current.left = newNode;
    //         }
     
    //         return false;
    //     }
     
    //     return this;
    // }








}


let tree = new BinarySearchTree()