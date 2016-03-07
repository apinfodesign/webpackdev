import template from './mission-list.html';

export default function( ngModule ) {
    ngModule.directive( 'missionList', function() {
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