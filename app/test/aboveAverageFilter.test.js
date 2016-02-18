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

         assert.deepEqual( $scope.magazines, testarray );
    });


    it( 'evaluates bigger, equal and smaller correctly', () => {
        $controller( 'MagazineCtrl', { $scope } );

        assert.equal( $scope.biggerThanAverage(10,20), false);
        assert.equal( $scope.biggerThanAverage(22,22), false);
        assert.equal( $scope.biggerThanAverage(32,22), true);
        assert.equal($scope.biggerThanAverage($scope.avg+1, $scope.avg), true);
        assert.equal($scope.biggerThanAverage($scope.avg, $scope.avg+1), false);
        assert.equal($scope.biggerThanAverage($scope.avg, $scope.avg), false);
    });



});