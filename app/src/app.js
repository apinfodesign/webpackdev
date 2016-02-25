import './css/main.css';
import angular from 'angular';
import angularRouter from 'angular-route';
import angularResource from 'angular-resource';
import angularAnimate from 'angular-animate';
import template from './app.html';
import filters from './filters';
import components from './components';
import services from './services';

const app = angular.module( 'myApp', [
    angularRouter,
    angularResource,
    //filters,
    components,
    services
]);

app.controller( 'AppCtrl', [ '$scope', function( $scope ){
    $scope.created = new Date();
}]);


app.config( [ '$routeProvider', 'magazinesServiceProvider', function( $routeProvider, magazinesServicesProvider) {

    $routeProvider
        .when('/magazines', {
            template: '<magazines></magazines>'
        })
        .when('/users', {
            template: '<users></users>'
        })
        .otherwise({
            redirectTo: '/magazines'
        });

    magazinesServicesProvider.setUrl('http://localhost:3000');



}]);

document.body.innerHTML = template;

angular.bootstrap( document, [ app.name ], {
});


//console.log(filters, 'filters');
//filters( app );



