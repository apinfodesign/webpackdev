import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularResource from 'angular-resource';
import satellizer from 'satellizer';
import services from './services';
import passData from './pass-data';
import components from './components';
import ngDialog from 'ng-dialog';
import './css/main.css';
import 'ng-dialog/css/ngDialog.css';
import 'ng-dialog/css/ngDialog-theme-default.css';

//import template from './app.html';
//import filters from './filters';

const API_URL = 'http://localhost:3000';

const app = angular.module( 'myApp', [
    angularResource, uirouter, components, services, satellizer, ngDialog
]);





app.controller('AppCtrl', [ '$scope', function( $scope ){
    $scope.created = new Date();
    $scope.signature = 'AuthorName';
}]);

app.config( function( $authProvider ) {
    $authProvider.twitter({
        url: API_URL + '/auth/twitter',
        // authorizationEndpoint: 'https://api.twitter.com/oauth/authenticate',
        // redirectUri: window.location.origin,
        // type: '1.0',
        // popupOptions: { width: 495, height: 645 }
    });
});



app.config( function( $stateProvider, $locationProvider, $urlRouterProvider ) {

        $stateProvider

            .state( 'welcome', {
                url: '/welcome',
                template: '<welcome welcome="welcome"/>',
                controller: passData()
            })

            .state( 'register', {
                url: '/register',
                template: '<register register="register"/>',
                controller: passData()
            })

            .state( 'login', {
                url: '/login',
                template: '<login login="login"/>',
                controller: passData()
            })

            .state( 'editorform', {
                url: '/editorform',
                template: '<magazine-edit magazines="magazines"/>',
                resolve: {
                    magazines ( magazinesService, $stateParams ){
                    }
                },
                controller: passData([ 'magazines' ])
            })

            .state( 'magazines', {
                url: '/magazines',
                template: '<magazines-list magazines="magazines"/>',
                resolve: {
                    magazines ( magazinesService, $stateParams ) {
                        return magazinesService.get();
                    }
                },
                controller: passData( [ 'magazines' ] )
            })

            .state( 'users', {
                url: '/users',
                template: '<users-list users="users"/>',
                resolve: {
                    users ( nextUsersService ){     //this is what fails!
                        console.log('resolving users');
                        return nextUsersService.get();
                    }
                },
                controller: passData( [ 'users' ] )
            })

            .state( 'about', {
                url: '/about',
                //data: {
                //    requireAuth: true
                //},
                template: '<about-list about="about"/>',
                controller: passData()
            })

            .state( 'mybookmarks', {
                url: '/mybookmarks',
                data: {
                    requireAuth: true
                },
                //template: '<h1>hello boomkarks list </h1>',
                template: '<userBookmarks-list >',
                controller: passData()
            })

            .state( 'logout', {
                url: '/logout',
                data: {
                    requireAuth: true
                },
                template: '<log-out logout="logout"/>',
                controller: passData()
            });

     $urlRouterProvider.otherwise( '/welcome');

    });


app.run( [ '$rootScope', 'ngDialog', '$state', '$auth',
    function ( $rootScope, ngDialog, $state, $auth ) {


        $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {

            if ( toState.data && toState.data.requireAuth && !$auth.isAuthenticated() /*!User.isAuthed()*/ ) {
                event.preventDefault();
                const dialog = ngDialog.open({
                    template: `<signin success="success(response)"/>`,
                    plain: true,
                    controller: [ '$scope', function( $scope ){
                        $scope.success = function( response ){
                            dialog.close();
                            //User.setToken();
                            return $state.go( toState.name, toParams );
                        };
                    }]
                });

                dialog.closePromise
                    .then( () => alert( 'success!') )
                    .catch( () => alert( 'failure!') );
            }
        });

    }]);


angular.bootstrap( document, [ app.name ], {
});




