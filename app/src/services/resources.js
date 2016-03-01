export default function( ngModule ) {

    function create( name, url ) {
        ngModule.factory( name, [ '$resource', 'baseUrl',
            function( $resource, baseUrl ) {
                return $resource( `${baseUrl}${url}` );
            }
        ]);
    }

    create( 'magazinesService', '/magazine?populate=user' );

    create( 'userService', '/users' );
}

