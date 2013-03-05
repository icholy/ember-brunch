require 'initialize'

describe 'The Todo Model', ->

	it "begins with completed set to false", ->
	  todo = Todos.Todo.create()
	  expect( todo.get("completed") ).to.eql false

	it "has access to the localStore store", ->
	  todo = Todos.Todo.create()
	  expect( todo.get("store") ).to.be.instanceOf Todos.Store

	it "when a Todo's title changes it automatically saves", ->
	  todo = Todos.Todo.create()
	  update = sinon.stub(todo.get("store"), "update")
	  Ember.run ->
        todo.set "title", "a new title"

	  expect( update ).to.be.calledOnce
	  update.restore()

	it "its constructor has access to the store", ->
	  expect( Todos.Todo.store ).to.be.instanceOf Todos.Store

	it "its instance should proxy the store", ->
	  create = sinon.stub(Todos.Todo.store, "createRecord")
	  properties = title: "hi"
	  Todos.Todo.createRecord properties
	  expect( create ).to.be.calledOnce
	  create.restore()

	it "destroying a Todo proxies to the store", ->
	  destroy = sinon.stub(Todos.Todo.store, "destroy")
	  todo = Todos.Todo.createRecord()
	  Todos.Todo.destroy todo
	  expect( destroy ).to.be.calledOnce
	  destroy.restore()

	it "asking for all todos proxies to the store", ->
	  all = sinon.stub(Todos.Todo.store, "all")
	  Todos.Todo.all()
	  expect( all ).to.be.calledOnce
	  all.restore()
