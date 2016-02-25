import template from './users.html';

export default function( ngModule ) {
    ngModule.directive( 'users', function() {
        return {
            replace: true,
            restrict: 'E',
            template,
            scope: {
                stores: '='
            },
            controller() {
                // do stuff
            }
        };
    });
}