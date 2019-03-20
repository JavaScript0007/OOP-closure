// closure - is when inner function has access to outer(enclosing) function variables
function Bird() {
  let weight = 15;
  this.getWeight = function() {
    return weight
  }
}

// 
const eagle = new Bird

console.log(eagle.getWeight())
