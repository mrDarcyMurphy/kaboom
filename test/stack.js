var assert = require('assert')
var Stack = require('../lab/stack.js')

describe('Stack', function(){

  describe('new Stack()', function(){

    describe('without arguments', function(){
      before(function(){
        this.stack = new Stack()
      })
      it('should create an instance of Stack', function(){
        assert(this.stack instanceof Stack, "stack is not an instanceof Stack")
      })
      it('should have zero length', function(){
        assert.equal(this.stack.length, 0)
      })
    })

    describe('with an array', function(){
      before(function(){
        this.predefinedStack = ['foo', 'bar']
        this.stack = new Stack(this.predefinedStack)
      })
      it('should create an instance of Stack', function(){
        assert(this.stack instanceof Stack, "stack is not an instanceof Stack")
      })
      it('should have length matching array', function(){
        assert.equal(this.stack.length, this.predefinedStack.length)
      })
    })

    describe('with anything else', function(){
      before(function(){
        this.stack = new Stack(123, 'foo', ['bar', 'baz'])
      })
      it('should create an instance of Stack', function(){
        assert(this.stack instanceof Stack, "stack is not an instanceof Stack")
      })
      it('should have zero length', function(){
        assert.equal(this.stack.length, 0)
      })
    })

  })

  describe('properties', function(){
    before(function(){
      this.stack = new Stack()
    })
    it('should not reveal internal stack', function(){
      assert.equal(undefined, this.stack.stack)
    })
    it('should reveal stack length', function(){
      assert.equal('number', typeof this.stack.length)
    })
  })

  describe('methods', function(){

    describe('push', function(){
      before(function(){
        this.stack = new Stack()
      })
      it("should throw an error if there's nothing to push", function(){
        var stack = this.stack
        assert.throws(function(){
          stack.push()
        }, Error)
      })
      it('should push a new item onto the stack', function(){
        assert(this.stack.push('foo'))
      })
      it('should set length to new stack length', function(){
        assert.equal(this.stack.length, 1)
      })
    })

    describe('top', function(){
      before(function(){
        this.stack = new Stack()
      })
      it("should throw an error if the stack is empty", function(){
        var stack = this.stack
        assert.throws(function(){
          stack.top()
        }, Error)
      })
      it('should return last item', function(){
        this.stack.push('foo')
        assert.equal(this.stack.top(), 'foo')
      })
    })

    describe('pop', function(){
      before(function(){
        this.stack = new Stack(['foo', 'bar'])
      })
      it("throws an error if there's no stack length", function(){
        var stack = new Stack()
        assert.throws(function(){
          stack.pop()
        }, Error)
      })
      it('returns last item', function(){
        var popped = this.stack.pop()
        assert.equal(popped, 'bar')
      })
      it('removes item from stack', function(){
        assert.equal(this.stack.length, 1)
      })
    })

  })
})
