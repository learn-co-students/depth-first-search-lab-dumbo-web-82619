function depthFirstSearch(rootNode, vertices, edges) {
    let stack = [rootNode]
    let visited = [rootNode]
    while (stack.length !== 0) {
        let currentNode = stack.pop()
        if (!currentNode.discovered) {
            currentNode.discovered = true
            findAdjacent(currentNode.name, vertices, edges).forEach(node => {
                stack.push(node)
                visited.push(node)
            })
        }
    }
    return visited
}

function findAdjacent(nodeName, vertices, edges) {
    return edges.filter( edge => edge.includes(nodeName) ).map( edge => edge.filter( end => end !== nodeName )[0]).map( name => findNode(name, vertices) ).filter( node => !node.discovered)
}

function findNode(nodeName, vertices) {
    return vertices.find(vertex => vertex.name === nodeName)
}

