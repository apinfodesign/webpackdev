describe( 'The Above Average Filter', () => {

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

    var service={
        get(){
        return Promise.resolve( testarray );
        }
    }

    beforeEach( angular.mock.module( 'myApp', function($provide){
        $provide.value('magazinesService', service)
        })
    );

    var component;
    var $scope;

    //inject compiler
    beforeEach( angular.mock.inject( function( $rootScope, $compile ) {
            var $outerScope = $rootScope.$new();
            var render = $compile(
                "<magazines-list magazine='magazine'> </magazines-list>"
            );

            component = render($outerScope);

            $outerScope.$digest();  //after call render, let ng know to update
            $scope = component.isolateScope();

            console.log($scope.magazines, '1111111');

    }));


    it( 'imports the data set', (done) => {

        setTimeout( function(){
            assert.equal( $scope.magazines, testarray );
            done();
        });
    });


    it( 'calculates avg value', (done) => {

            setTimeout( function(){
                assert.equal( $scope.avg, 17.25 );
                done();
            });
    });


    it( 'evaluates bigger correctly test 1', (done) => {

        setTimeout( function(){
            assert.equal($scope.biggerThanAverage($scope.avg+1, $scope.avg), true);
            assert.equal($scope.biggerThanAverage(32,22), true);
            done();
        });
    });


    it( 'evaluates smaller correctly test 2', (done) => {
        setTimeout( function(){
            assert.equal($scope.biggerThanAverage(10,20), false);
            assert.equal($scope.biggerThanAverage(22,22), false);
            assert.equal($scope.biggerThanAverage($scope.avg, $scope.avg+1), false);
            assert.equal($scope.biggerThanAverage($scope.avg, $scope.avg), false);

            done();
        });
    });





});