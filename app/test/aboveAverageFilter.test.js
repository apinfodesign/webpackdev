describe( 'The Above Average Filter', () => {

    beforeEach( angular.mock.module( 'myApp' ) );
    var $controller, $scope;


    beforeEach( angular.mock.inject( function(   _$rootScope_, _$controller_ ) {
        $controller = _$controller_;
        $scope = _$rootScope_.$new();
    }));


    it( 'calculates average value of known array', () => {
        $controller( 'MagazineCtrl', { $scope } );
        console.log($scope.avg, 'llllllxxxxxxx');
        assert.equal( $scope.avg, 17.25 );
    });

    it( 'imports the data set', () => {
        //array is actually defined in the app, but pretend it is imported
        $controller( 'MagazineCtrl', { $scope } );

        var testarray =     [
            { name: 'New York Times',   age: 24 },
            { name: 'Washington Post',  age: 8  },
            { name: 'Huffington Post',  age: 4  },
            { name: 'Daily Beast',      age: 10 },
            { name: 'Atlantic',         age: 14 },
            { name: 'Wall Street J',    age: 33 },
            { name: 'NY Post',          age: 22 },
            { name: 'LA Times',         age: 23 }
        ];

        $controller( 'MagazineCtrl', { $scope } );
        assert.deepEqual( $scope.magazines, testarray );
    });





    //it( 'can add dog to default data set', () => {
    //    $controller( 'View1Ctrl', { $scope } );
    //    $scope.add( 'beagle' );
    //    assert.deepEqual( $scope.dogTypes,
    //        [ 'collie', 'poodle', 'lab', 'beagle' ] );
    //});


});