var assert = require('assert')
var Stack = require('../lab/stack.js')

describe('stack', function(){

  var stack0
  var stack1
  var stack2

  before(function(){
    stack0 = new Stack()
    stack1 = new Stack()
    stack2 = new Stack(['foo', 'bar'])
  })

  it('initializes', function(){
    assert(stack1 instanceof Stack, "stack is not an instanceof Stack")
  })

  it('with zero length', function(){
    assert.equal(stack1.length, 0)
  })

  it('initializes with array if passed in', function(){
    assert.equal(stack2.length, 2)
  })

  it('does not reveal internal stack', function(){
    assert.equal(undefined, stack1.stack)
  })

  describe('push', function(){

    it('should push a new item onto the stack', function(){
      assert(stack1.push('foo'))
    })

    it('sets length to new stack length', function(){
      assert.equal(stack1.length, 1)
    })

  })

  describe('top', function(){

    it('returns last item', function(){
      assert.equal(stack0.top(), undefined)
      assert.equal(stack1.top(), 'foo')
    })

  })

  describe('pop', function(){

    var popped

    before(function(){
      popped = stack2.pop()
    })

    it('returns last item', function(){
      assert.equal(popped, 'bar')
    })

    it('removes item from stack', function(){
      assert.equal(stack2.length(), 1)
    })

  })

})
