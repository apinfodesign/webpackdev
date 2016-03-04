import template from './log-out.html';

export default function( ngModule ) {
    ngModule.directive( 'logout', function() {
        return {
            replace: true,
            restrict: 'E',
            scope: {
                success: '&'
            },
            controller:[ '$scope', function( $scope ){
                    $scope.logout = function() {
                        $scope.$window.localStorage.satellizer_token='';
                    };
                }]

        };
    });
}