import './css/main.css';
import angular from 'angular';

import angularResource from 'angular-resource';
import uirouter from 'angular-ui-router';
import components from './components';
import services from './services';

import passData from './pass-data';

//import angularAnimate from 'angular-animate';
//import template from './app.html';
//import filters from './filters';

const app = angular.module( 'myApp', [
    angularResource,
    uirouter,
    components,
    services
]);


app.controller('AppCtrl', [ '$scope', function( $scope ){
    $scope.created = new Date();
}]);


app.config( function( $stateProvider, $locationProvider, $urlRouterProvider ) {

        $stateProvider
            .state( 'magazines', {
                url: '/magazines',
                template: `<magazines magazines="magazines"/>`,
                resolve: {
                    magazines ( magazinesService, $stateParams ) {
                        return magazinesService.query({
                            query: {
                                type: $stateParams.type
                            }
                        }).$promise;
                    }
                },

                controller: passData( [ 'magazines' ] )
                // controller: function( $scope, $stateParams, pets ) {
                // 	$scope.type = $stateParams.type;
                // 	$scope.pets = pets;
                // }
            })


            //.state( 'magazines.type', {
            //    url: '/type/:magazineType',
            //    views: {
            //        details: {
            //            template: `<magazine-type-details type="magazineType"/>`,
            //            controller: passData()
            //        },
            //        picture: {
            //            template: `<magazine-type-picture type="magazineType"/>`
            //        },
            //        availability: {
            //            template: `<magazine-type-availability type="magazineType"/>`
            //        }
            //    }
            //})


            //.state( 'users', {
            //    url: '/users',
            //    resolve: {
            //        stores ( UserService ) {
            //            return UserService.query();
            //        }
            //    },
            //    template: '<users users="users"/>',
            //    controller: passData()
            //});

    });



angular.bootstrap( document, [ app.name ], {
});




