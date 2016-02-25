import details from './details/details';
// picture
// availability

export default function( $stateProvider ) {
    $stateProvider.state( 'magazines.type', {
        url: '/type/:magazineType',
        views: {
            details,
            picture,
            availability
        }
    });
}