var assert = require('assert')
var Stack = require('../lab/stack.js')

describe('stack', function(){

  // var stack0
  // var stack1
  // var stack2

  // before(function(){
  //   stack0 = new Stack()
  //   stack1 = new Stack()
  //   stack2 = new Stack(['foo', 'bar'])
  // })

  describe('initialization', function(){

    describe('with nothing', function(){
      before(function(){
        this.stack = new Stack()
      })
      it('should work', function(){
        assert(this.stack instanceof Stack, "stack is not an instanceof Stack")
      })
      it('should create a stack with zero length', function(){
        assert.equal(this.stack.length, 0)
      })
    })

    describe('with an array', function(){
      before(function(){
        this.stack = new Stack(['foo', 'bar'])
      })
      it('should work', function(){
        assert(this.stack instanceof Stack, "stack is not an instanceof Stack")
      })
      it('should set stack.length correctly', function(){
        assert.equal(this.stack.length, 2)
      })
    })

    describe('with something other than an array', function(){
      it('should throw an error', function(){
        assert.throws(function(){
          var stack = new Stack('fail')
        }, Error)
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

    before(function(){
      this.stack = new Stack()
    })
    it('should reveal push method', function(){
      assert(this.stack.push)
      assert.equal('function', typeof this.stack.push)
    })
    it('should reveal top method', function(){
      assert(this.stack.top)
      assert.equal('function', typeof this.stack.top)
    })
    it('should reveal pop method', function(){
      assert(this.stack.pop)
      assert.equal('function', typeof this.stack.pop)
    })

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
