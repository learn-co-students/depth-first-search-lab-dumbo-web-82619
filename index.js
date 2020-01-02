function depthFirstSearch(rootNode, vertices, edges) {
  let visited = [rootNode]
  let stack = []

  stack.push(rootNode)
  while (stack.length > 0) {
    let node = stack.pop()

    if (!node.discovered) {
      node.discovered = true
      findAdjacent(node.name, vertices, edges).forEach(node => {
        visited.push(node)
        stack.push(node)
      })
    } 
  }
  return visited
}

function findAdjacent(nodeName, vertices, edges) {
  let edgeList = edges.filter(edge => edge.includes(nodeName))
  let nameList = [].concat.apply([], edgeList)
  let targets = nameList.filter(name => name !== nodeName)
  let adjacents = vertices.filter(vertex => targets.includes(vertex.name))

  return adjacents.filter(node => !node.discovered)
}