var attendanceModule = angular.module("attendanceModule", []);

attendanceModule.controller("attendanceTaker", function($scope) {
  //************Variables****************//
  var attendance = "p";
  var total = students.length;
  var p = total;
  var a = 0;
  //************Variables****************//
  //**************DATA*****************//
  var students = [
    {
      name: "John worthington",
      reg: 11390771,
      roll: 1,
      attendance: "p"
    },
    {
      name: "Sara Hemsworth",
      reg: 11390707,
      roll: 2,
      attendance: "p"
    },
    {
      name: "James Smith",
      reg: 11390871,
      roll: 3,
      attendance: "p"
    },
    {
      name: "Veronica Alberto",
      reg: 11390807,
      roll: 4,
      attendance: "p"
    },
    {
      name: "Avyra avas",
      reg: 11702561,
      roll: 5,
      attendance: "p"
    }
  ];

  var students2 = [
    {
      name: "James Cameron",
      reg: 11590791,
      roll: 1,
      attendance: "p"
    },
    {
      name: "Sierra Mac",
      reg: 11590709,
      roll: 2,
      attendance: "p"
    },
    {
      name: "Nick Fury",
      reg: 11590879,
      roll: 3,
      attendance: "p"
    },
    {
      name: "Tony Strak",
      reg: 11390809,
      roll: 4,
      attendance: "p"
    },
    {
      name: "Avyra avas",
      reg: 11702561,
      roll: 5,
      attendance: "p"
    }
  ];
  //**************DATA*****************//
  //************SCOPE variables**************//
  $scope.students = students;
  $scope.students2 = students2;
  $scope.total = total;
  $scope.p = p;
  $scope.a = a;
  $scope.sortBy = "roll";
  $scope.seq = false;
  $scope.sec = "avas27";
  //************SCOPE variables**************//

  //************Functions**************//
  $scope.getId = (reg, index, v) => {
    id = reg;
    var ele = angular.element(document.getElementById(reg));
    if (v == "avas27") attendance = students[index].attendance;
    else if (v == "popm21") attendance = students2[index].attendance;

    if (attendance == "a") {
      ele.addClass("absentMarked");
      console.log(absent);
    } else {
      ele.removeClass("absentMarked");
    }
  };

  $scope.totalCount = () => {
    var count = angular.element(document.querySelectorAll(".absentMarked"));
    a = count.length;
    $scope.p = p - a;
    $scope.a = a;
  };

  $scope.setOrder = () => {
    if ($scope.seq == false) {
      $scope.seq = true;
      document.getElementById("btn").innerHTML = "Dec.";
    } else {
      $scope.seq = false;
      document.getElementById("btn").innerHTML = "Inc.";
    }
  };

  $scope.absentAll = () => {
    if ($scope.sec == "avas27") {
      for (var i = 0; i < students.length; i++) {
        students[i].attendance = "a";
        var element = angular.element(document.getElementById(students[i].reg));
        element.addClass("absentMarked");
      }
    } else if ($scope.sec == "popm21") {
      for (var i = 0; i < students2.length; i++) {
        students2[i].attendance = "a";
        var element = angular.element(
          document.getElementById(students2[i].reg)
        );
        element.addClass("absentMarked");
      }
    }
    $scope.totalCount();
  };

  $scope.presentAll = () => {
    if ($scope.sec == "avas27") {
      for (var i = 0; i < students.length; i++) {
        students[i].attendance = "p";
        var element = angular.element(document.getElementById(students[i].reg));
        element.removeClass("absentMarked");
      }
    } else if ($scope.sec == "popm21") {
      for (var i = 0; i < students2.length; i++) {
        students2[i].attendance = "p";
        var element = angular.element(
          document.getElementById(students2[i].reg)
        );
        element.removeClass("absentMarked");
      }
    }
    $scope.totalCount();
  };

  $scope.getSection = val => {
    $scope.presentAll();
  };

  $scope.submitForm = () => {
    alert(
      `Attendance Submited\nAbsent: ${$scope.a}\nPresent: ${$scope.p}\nTotal: ${$scope.total}\nSection: ${$scope.sec}`
    );
  };
  //************Functions**************//
});
