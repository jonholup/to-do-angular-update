myApp.controller('HomeController', ['TaskFactory',function(TaskFactory){
  console.log('Home Controller was loaded');
  var self = this;
  self.message = 'This site is amazing';
}]);
