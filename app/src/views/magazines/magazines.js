import template from './magazines.html';
import magazineDetail from './magazine-detail/magazine-detail';

export default function( $stateProvider ) {
    $stateProvider.state( 'magazines', {
        url: '/magazines?type',
        template,
        resolve: {
            pets ( MagazineService, $stateParams ) {
                return MagazineService.query({
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