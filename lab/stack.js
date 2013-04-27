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
   * pushes new value onto stack
   * @param {Object} thing to push onto the stack
   * @api public
   */
  this.push = function(i) {
    return this.length = stack.push(i)
  }

  /**
   * returns, but does not pop, the top value
   * @api public
   */
  this.top = function() {
    return stack[stack.length-1]
  }

  /**
   * returns top value and removes it from stack
   * @api public
   */
  this.pop = function() {
    // if ( stack.length == 0 )
    this.length = stack.length
    return stack.pop()
  }

}

module.exports = Stack
