import template from './register.html';

export default function( ngModule ) {
    ngModule.directive( 'register', function() {
        return {
            replace: true,
            restrict: 'E',
            template,
            scope: {
                success: '&'
            },
            controller ( $scope, $auth ) {

                $scope.authenticate = function( provider ) {
                    $auth.authenticate( provider )
                        .then( response => {
                            $scope.success( { response } );
                        })
                        .catch( response => {
                            alert( 'problem!' );
                        });
                };
            }


        };
    });
}