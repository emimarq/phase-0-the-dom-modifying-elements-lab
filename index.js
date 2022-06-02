// Write your code here!
const domNode = document.getElementById('main')
domNode.remove()

const newHeader = document.createElement('h1')
newHeader.id = "victory"
newHeader.innerHTML = "Emilio is the champion"
document.body.append(newHeader)