var assert = require('assert')
var Stack = require('../lab/stack.js')

describe('stack', function(){

  var stack
  var stack2

  before(function(){
    stack = new Stack()
    stack2 = new Stack(['foo', 'bar'])
  })

  it('initializes', function(){
    assert(stack instanceof Stack, "stack is not an instanceof Stack")
  })

  it('with zero length', function(){
    assert.equal(stack.length, 0)
  })

  it('initializes with array if passed in', function(){
    assert.equal(s2.length, 2)
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
