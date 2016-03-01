import angular from 'angular';
import uirouter from 'angular-ui-router';

import angularResource from 'angular-resource';
import services from './services';
import passData from './pass-data';

import components from './components';
import './css/main.css';

//import template from './app.html';
//import filters from './filters';

const app = angular.module( 'myApp', [
    angularResource, uirouter, components, services
]);


app.controller('AppCtrl', [ '$scope', function( $scope ){
    $scope.created = new Date();
    $scope.signature = 'AuthorName';
}]);

app.config( function( $stateProvider, $locationProvider, $urlRouterProvider ) {

        $stateProvider
            .state( 'magazines', {
                url: '/magazines',
                template: `<magazines-list magazines="magazines"/>`,
                resolve: {
                    magazines ( magazinesService, $stateParams ) {
                        return magazinesService.get();
                    }
                },
                controller: passData( [ 'magazines' ] )
            })

            .state( 'editorform', {
                url: '/editorform',
                template: `<magazine-edit magazines="magazines"/>`,
                resolve: {
                    magazines ( magazinesService, $stateParams ){
                    }
                },
                controller: passData([ 'magazines' ])
            })

            .state( 'users', {
                url: '/users',
                template: '<users-list users="users"/>',
                controller: passData()
            })

            .state( 'about', {
                url: '/about',
                template: '<about-list about="about"/>',
                controller: passData()
            });

     $urlRouterProvider.otherwise( '/magazines');

    });

angular.bootstrap( document, [ app.name ], {
});




