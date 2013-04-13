var assert = require('assert')
var Stack = require('../lab/stack.js')

describe('stack', function(){

  var stack

  before(function(){
    stack = new Stack()
  })

  it('should be able to initialize', function(){
    assert(stack, "stack doesn't exist")
    assert(stack instanceof Stack, "stack is not an instanceof Stack")
  })



  describe('push method', function(){

    it('should push a new item onto the stack', function(){
      assert(stack.push('foo'))
    })

    it('sets length to new stack length', function(){
      assert.equal(stack.length, 1)
    })

  })


})
