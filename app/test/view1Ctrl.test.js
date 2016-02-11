describe( 'The Dogs Controller', () => {

    beforeEach( angular.mock.module( 'myApp' ) );

    var $controller, $scope;

    beforeEach( angular.mock.inject( function( _$rootScope_, _$controller_ ) {
        $controller = _$controller_;
        $scope = _$rootScope_.$new();
    }));

    it( 'has default data via imported function *content.js*', () => {
        $controller( 'AppCtrl', { $scope } );
        assert.equal( $scope.anything, 'Figuring It Out' );
    });

    it( 'imports the data set', () => {
        $controller( 'View1Ctrl', { $scope } );
        assert.deepEqual( $scope.dogTypes, [ 'collie', 'poodle', 'lab' ] );
    });

    it( 'can add dog to default data set', () => {
        $controller( 'View1Ctrl', { $scope } );
        $scope.add( 'beagle' );
        assert.deepEqual( $scope.dogTypes,
            [ 'collie', 'poodle', 'lab', 'beagle' ] );
    });


});