import template from './about-list.html';

export default function( ngModule ) {

    ngModule.directive( 'aboutList', function() {
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