myApp.factory('TaskFactory', ['$http', function($http) {

  var testArrayVariable = ['lala', 'Donald Bagel', 'Carolyn'];
  testArrayVariable.pop();

  var factoryTasks = { list: []};

  getTasks();

  function getTasks() {
    $http({
      method: 'GET',
      url: '/tasks'
    }).then(function(response) {
      console.log('this is response.data from factory',response.data);
      console.log('this is response from factory', response);
      factoryTasks.list = response.data;

    });
  }
  //this is the public API, if it's not in here, your controller won't see it
  return {
    testProperty: 'taco',
    testArray: testArrayVariable,
    allTasks: factoryTasks,
    updateTasks: getTasks
  };
}]);
