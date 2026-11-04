/* Name: Sinchana | Department: Computer Science */
var app = angular.module('studentApp', []);

app.controller('CollegeController', function($scope) {
  $scope.collegeName = "Sample College";
});

app.controller('StudentController', function($scope) {
  $scope.students = ["Alice", "Bob", "Charlie"];
  $scope.showDetails = false;

  $scope.addStudent = function() {
    if ($scope.studentName) {
      $scope.students.push($scope.studentName);
      $scope.studentName = "";
    }
  };
});