export default function( ngModule ) {

    function create( name, url ) {
        ngModule.factory( name, [ '$resource', 'baseUrl',
            function( $resource, baseUrl ) {
                return $resource( `${baseUrl}${url}` );
            }
        ]);
    }

    create( 'MagazinesService', '/magazines?populate=user' );

    create( 'UserService', '/users' );
}


////////////////////////////////////////////////////////////PETS example below
//
//export default function( ngModule ) {
//
//    function create( name, url ) {
//        ngModule.factory( name, [ '$resource', 'baseUrl',
//            function( $resource, baseUrl ) {
//                return $resource( `${baseUrl}${url}` );
//            }
//        ]);
//    }
//
//    create( 'PetService', '/pets?populate=store' );
//    create( 'StoreService', '/stores' );
//}

