var test = require('tape')
  , {{PascalName}}Pane = require('./index.js')
  , sinon = require('sinon')
  , _ = require('lodash')
  , defaultOptions = {}
  , createView = function createView(options){
    return new {{PascalName}}Pane(_.defaults(options || {}, defaultOptions))
  }
  , stopListening
  , setup = function setup(){
    stopListening = sinon.spy({{PascalName}}Pane.prototype, 'stopListening')
  }
  , cleanup = function cleanup(){
    stopListening.restore()
  }

test('Pane: {{PascalName}}: constructor', function constructorTest(t){
  var view = createView()

  t.equal(
    typeof view
    , 'object'
    , 'creates an object'
  )

  t.end()
})

test('Pane: {{PascalName}}#bindEvents', function bindEventsTest(t){
  var view = createView()
    , fn = view.bindEvents

  setup()

  // call bind events
  fn.call(view)
  t.equal(
    stopListening.callCount
    , 1
    , 'calls stopListening so that events aren\'t bound multiple times'
  )
  t.ok(
    stopListening.calledWith(view.state)
    , 'calls stopListening with the state so that not all listeners are removed'
  )

  cleanup()
  t.end()
})

test('Pane: {{PascalName}}#beforeInit', function beforeInitTest(t){
  var view = createView()
    , fn = view.beforeInit
    , options = defaultOptions

  fn.call(view, options)
  t.ok(
    view.state instanceof view.State
    , 'creates a state model'
  )

  t.end()
})

test('Pane: {{PascalName}} properties', function propertiesTest(t){
  var view = createView()

  t.ok(
    view.navBarTitle
    , 'sets a title'
  )

  t.ok(
    view.navBarRightButton
    , 'sets a right button'
  )

  t.end()
})
