'use strict';

/* Return list of tasks for this user */

angular.module('SampleAngularApp')
  .factory('taskList', function () {
    // Service logic
    // ...

    var taskStubs = {
      7269: {
        building: "Henley pool",
        category: "Legionella",
        contact_number: "01234 567 890",
        description: "Integration test short description",
        long_desc: "Integration test long description",
        reporter: "Integration test",
        status: "ASSIGNED",
        title: "System - TEMP",
        type: "TEMP",
        user_id: 18
      },
      // store metadata about the  tasks
      length: 1
    }

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      getLength: function () {
        return 1
      },
      getTasks: function () {
        return taskStubs
      }
    };
  });
