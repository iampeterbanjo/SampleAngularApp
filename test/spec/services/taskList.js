'use strict'

describe('Service: taskList', function () {

  // load the service's module
  beforeEach(module('SampleAngularApp'))

  // instantiate service
  var taskList

  beforeEach(inject(function (_taskList_) {
    taskList = _taskList_
  }))

  it('should do something', function () {
    expect(!!taskList).toBe(true)
  })

  it('should do say the meanging of life is 42', function () {
    expect(taskList.someMethod()).toBe(42)
  })

  it('should return the number of tasks', function () {
    expect(taskList.getLength()).toEqual(jasmine.any(Number))
  })

  it('should return the tasks as an object', function () {
    expect(taskList.getTasks()).toEqual(jasmine.any(Object))
  })

})
