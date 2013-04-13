var stack = []

var Stack = function() {}

Stack.prototype.push = function(i) {
  stack.push(i);
  this.length = stack.length;
  return stack.length;
};

module.exports = Stack
