'use strict';

describe('Service: mainNavigation', function () {

  // load the service's module
  beforeEach(module('SampleAngularApp'));

  // instantiate service
  var mainNavigation;
  beforeEach(inject(function (_mainNavigation_) {
    mainNavigation = _mainNavigation_;
  }));

  it('should do something', function () {
    expect(!!mainNavigation).toBe(true);
  });

});
