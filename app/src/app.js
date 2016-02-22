import './css/main.css';
import angular from 'angular';
import angularAnimate from 'angular-animate';
import template from './app.html';
import filters from './filters';
import components from './components';
import services from './services';

const app = angular.module( 'myApp', [
    angularAnimate,
    //filters,
    components,
    services
]);




app.controller( 'AppCtrl', [ '$scope', function( $scope ){
    $scope.created = new Date();

}]);


//console.log(filters, 'filters');
//filters( app );

//
//
//app.controller( 'EditCtrl', [ '$scope', function( $scope ){
//
//    $scope.update = function() {
//        $scope.$parent.magazine = angular.copy($scope.edit);
//    };
//
//    $scope.reset = function() {
//        $scope.edit = angular.copy($scope.magazines);
//    };
//
//    $scope.reset();
//}]);






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



document.body.innerHTML = template;

angular.bootstrap( document, [ app.name ], {

});


