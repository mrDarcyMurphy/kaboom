var Stack = function(stack) {

  /**
   * the stack
   * @api private
   */
  var stack = Array.isArray(stack) ? stack : []

  /**
   * returns length/size of stack
   * @api public
   */
  this.length = stack.length

  /**
   * the top value in the stack
   * @api public
   */
  this.top = stack[stack.length-1]

  /**
   * pushes new value onto stack
   * @param {Object} thing to push onto the stack
   * @api public
   */
  this.push = function(i) {
    this.length = stack.push(i)
    this.top = stack[this.length-1]
    return this.length
  }


}

module.exports = Stack
