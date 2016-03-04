import template from './welcome-list.html';

export default function( ngModule ) {

    ngModule.directive( 'welcome', function() {
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