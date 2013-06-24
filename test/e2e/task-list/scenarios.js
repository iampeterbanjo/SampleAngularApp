'use strict'

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('OpuzMobileAngular App', function() {

  it('should redirect index.html to index.html#/tasks', function() {
    browser().navigateTo('../../app/index.html')
    expect(browser().location().url()).toBe('/tasks')
  })


  describe('Task list view', function() {

    beforeEach(function() {
      browser().navigateTo('../../app/index.html#/tasks')
    })


    it('should filter the phone list as user types into the search box', function() {
      expect(repeater('.tasks li').count()).toBe(2)

      input('query').enter('temperature')
      expect(repeater('.tasks li').count()).toBe(1)

      input('query').enter('audit')
      expect(repeater('.tasks li').count()).toBe(1)
    })


    it('should be possible to control phone order via the drop down select box', function() {
      expect(repeater('.tasks li', 'Task List').column('task.type')).
          toEqual(["System - TEMP",
                   "System - Audit"])

      select('orderProp').option('Alphabetical')

      expect(repeater('.tasks li', 'Task List').column('task.type')).
          toEqual(["System - TEMP",
                   "System - Audit"])
    })


    it('should render task specific links', function() {
      input('query').enter('audit')
      element('.phones li a').click()
      expect(browser().location().url()).toBe('/task/audit')
    })
  })
})
