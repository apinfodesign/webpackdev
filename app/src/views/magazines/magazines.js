import template from './magazines.html';
import magazineDetail from './magazine-detail/magazine-detail';

export default function( $stateProvider ) {
    $stateProvider.state( 'magazines', {
        url: '/magazine?type',
        template,
        resolve: {
            pets ( magazinesService, $stateParams ) {
                return magazineService.query({
                    query: {
                        type: $stateParams.type
                    }
                });
            }
        },
        controller: function( $scope, magazines ){
            $scope.magazines = magazines;
        }
    });

    magazineDetail( $stateProvider );
}