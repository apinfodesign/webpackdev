import template from './users-list.html';

export default function( ngModule ) {
    ngModule.directive( 'usersList', function() {
        return {
            replace: true,
            restrict: 'E',
            template,
            controller() {
                // do stuff
            }
        };
    });
}