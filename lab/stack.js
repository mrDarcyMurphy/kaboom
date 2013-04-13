var Stack = function(stack) {
  this.stack = Array.isArray(stack) ? stack : [];
}

Stack.prototype.push = function(i) {
  this.stack.push(i);
  this.length = this.stack.length;
  return this.stack.length;
};

Stack.prototype.length = 0

module.exports = Stack
