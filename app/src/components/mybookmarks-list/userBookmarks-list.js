import template from './userBookmarks-list.html';
//import filters from '../../filters';

export default function( ngModule ) {

    //console.log(template, 'is template');

    ngModule.directive( 'userbookmarksList', function(){
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


