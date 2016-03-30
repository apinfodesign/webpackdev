import template from './login.html';

export default function( ngModule ) {

    ngModule.directive( 'login', function() {
        return {
            replace: true,
            restrict: 'E',
            template,
            scope: {
                success: '&'
            },
            controller ( $scope, $auth, $state ) {

                $scope.authenticate = function( provider ) {
                    $auth.authenticate( 'twitter' )
                        .then( response => {
                            $state.transitionTo( 'mybookmarks' );
                        })
                        .catch( response => {
                            alert( 'problem!' );
                        });
                };

                $scope.authloggedin= $auth.isAuthenticated

            }

        };
    });
}


// $auth.isAuthenticated