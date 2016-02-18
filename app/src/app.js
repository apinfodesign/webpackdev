import './css/main.css';
import angular from 'angular';
import angularAnimate from 'angular-animate';
import template from './app.html';
import filters from './filters';
//import natural from 'natural';

const app = angular.module( 'myApp', [
    angularAnimate
]);

console.log(filters, 'filters');

filters( app );

app.controller( 'AppCtrl', [ '$scope', function( $scope ){
    $scope.created = new Date();
}]);


app.controller( 'ListCtrl', [ '$scope', '$filter', function( $scope, $filter ){

    $scope.search = {};

    $scope.compare = function( actual, expected ) {
        if ( isNaN( expected ) ) {
            // $filter('filter')()
            return actual.toLowerCase().indexOf( expected ) > -1;
        }
        else {
            return actual > +expected;
        }
    };

    $scope.play = true;
    $scope.kids = [
        { name: 'Jean', age: 12, toy: 'plane' },
        { name: 'Jill', age: 8, toy: 'plane' },
        { name: 'Tommy', age: 6, toy: 'car' },
        { name: 'Robert', age: 10, toy: 'train' },
        { name: 'Sarah', age: 11, toy: 'baloon' },
        { name: 'Tim', age: 9, toy: 'train' },
        { name: 'Heathrow', age: 5, toy: 'car' },
        { name: 'Janice', age: 9, toy: 'baloon' }
    ];
}]);


app.controller( 'MagazineCtrl', [ '$scope', '$filter', function( $scope, $filter ){

    $scope.search = {};

    $scope.compare = function( actual, expected ) {
        if ( isNaN( expected ) ) {
            // $filter('filter')()
            return actual.toLowerCase().indexOf( expected ) > -1;
        }
        else {
            return actual > +expected;
        }
    };

    $scope.play = true;

    $scope.magazines = [
        { name: 'New York Times',   age: 24 },
        { name: 'Washington Post',  age: 8  },
        { name: 'Huffington Post',  age: 4  },
        { name: 'Daily Beast',      age: 10 },
        { name: 'Atlantic',         age: 14 },
        { name: 'Wall Street J',    age: 33 },
        { name: 'NY Post',          age: 22 },
        { name: 'LA Times',         age: 23 }
    ];

    $scope.avg = average($scope.magazines);

    $scope.biggerThanAverage = function(actual , avg ) {
        console.log(actual, avg, ' is actual and average');
        return actual > +avg;
    };

    $scope.applyAverage = function(){
        if(!$scope.ageInput)
            { $scope.ageInput= { age: $scope.avg}; }
        else {
            $scope.ageInput = null;}
    };


     function average( array ){
        var total = 0;
        for (var i = 0; i < array.length; i++) {
            total = total + (parseInt(array[i].age)  );
            }
        console.log ( total / array.length , ' is average');
        return ( ( total / array.length ) );
    }



}]);




document.body.innerHTML = template;

angular.bootstrap( document, [ app.name ], {

});


