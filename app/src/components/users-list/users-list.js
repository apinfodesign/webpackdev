import template from './users-list.html';

export default function( ngModule ) {
    ngModule.directive( 'usersList', function() {

        return {
            replace: true,
            restrict: 'E',
            template,
            scope: {
                users: '='
            },
            controller:[ '$scope', 'nextUsersService',
                function( $scope, nextUsersService ) {



                }]
        };
    });
}