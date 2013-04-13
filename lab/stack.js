var Stack = function(stack) {
  this.stack = Array.isArray(stack) ? stack : [];
}

Stack.prototype.push = function(i) {
  return this.length = this.stack.push(i);
};

Stack.prototype.length = 0

module.exports = Stack
