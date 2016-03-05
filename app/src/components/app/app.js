import template from './app.html'
import styles from './app.scss';


export default function( ngModule ) {
    ngModule.directive( 'app', function() {
        return {
            replace: true,
            restrict: 'E',
            template,
            controller:[ '$scope', '$auth', function( $scope, $auth ){

                $scope.logout = function() {
                    $auth.logout();
                };

                $scope.isloggedin = function(){
                    return $auth.isAuthenticated();
                };

                $scope.username = function(){
                    console.log($auth.link(), 'llllsksksksk');
                    //return $auth.link()[0];
                };
            }]
        };
    });
}