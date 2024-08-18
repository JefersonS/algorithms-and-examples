const createNode = (value) => {
    return {
        value,
        next: null
    }
}

const createLinkedList = () => {
    let head = null;

    return {
        addValue: (value) => {
            const newNode = createNode(value)
            if(!head) {
                head = newNode;
                return;
            }

            let currentNode = head;
            while(currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = newNode
        },
        removeValue: (value) => {
            if(!head) {
                console.log("list is empty")
                return;
            }

            if (head.value === value) {
                head = head.next
                return;
            }

            let currentNode = head;
            while(currentNode.next) {
                if (currentNode.next.value === value) {
                    currentNode.next = currentNode.next.next
                    console.log(`value ${value} removed`)
                    return;
                }
                currentNode = currentNode.next
            }
            console.log("value not found")
            return;
        },
        findValue: (value) => {
            let currentNode = head;
            while(currentNode.next) {
                if (currentNode.value === value) {
                    console.log(`value found ${value}, node: ${currentNode}`)
                    return;
                }
                currentNode = currentNode.next
            }
            console.log("value not found")
            return;
        },
        print: () => {
            let currentNode = head;
            let i = 0
            while(currentNode && currentNode.value) {
                console.log(`Node ${i} value ${currentNode.value} next ${currentNode.next && currentNode.next.value}`)
                currentNode = currentNode.next
                i++
            }
        }
    }
}

const newLinkedList = createLinkedList()
newLinkedList.addValue(5)
newLinkedList.addValue(1)
newLinkedList.addValue(3)
newLinkedList.addValue(4)
newLinkedList.addValue(7)
newLinkedList.addValue(9)
newLinkedList.findValue(3)
newLinkedList.removeValue(3)
newLinkedList.findValue(3)
newLinkedList.print()

