import template from './privacy-list.html';

export default function( ngModule ) {

    ngModule.directive( 'privacyList', function() {
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