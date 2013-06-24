'use strict'

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('OpuzMobileAngular App', function() {

  describe('Task detail view', function() {

    beforeEach(function() {
      browser().navigateTo('../../app/index.html#/task/audit')
    })


    it('should display task page', function() {
      expect(binding('task.type')).toBe('audit')
    })

    /*
    it('should display the first phone image as the main phone image', function() {
      expect(element('img.phone').attr('src')).toBe('img/phones/nexus-s.0.jpg')
    })


    it('should swap main image if a thumbnail image is clicked on', function() {
      element('.phone-thumbs li:nth-child(3) img').click()
      expect(element('img.phone').attr('src')).toBe('img/phones/nexus-s.2.jpg')

      element('.phone-thumbs li:nth-child(1) img').click()
      expect(element('img.phone').attr('src')).toBe('img/phones/nexus-s.0.jpg')
    })
    */
  })
})
