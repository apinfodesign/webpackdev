describe( 'magazine Test Suite', () => {

    var testarray =     [
        { _id: 3, name: 'New York Times',  age: 24 },
        { _id: 4, name: 'Washington Post',  age: 8  },
        { _id: 5, name: 'Huffington Post',  age: 4  },
        { _id: 6, name: 'Daily Beast',      age: 10 },
        { _id: 7, name: 'Atlantic',         age: 14 },
         ];

    var service={};   //create a mock service

    beforeEach( angular.mock.module( 'myApp', function($provide){
        $provide.value('magazinesService', service)
        })
    );

    var component;
    var $scope;

    //inject compiler
    beforeEach( angular.mock.inject( function( $rootScope, $compile ) {

            var $outerScope = $rootScope.$new();

            $outerScope.magazines = testarray;

            var render = $compile(
                "<magazines-list magazines='magazines'> </magazines-list>"
            );

            component = render($outerScope);

            $outerScope.$digest();
            //after call render, let ng know to update

            $scope = component.isolateScope();

            console.log($scope.magazines, '... is $scope.magazines');

    }));



    it( 'has magazines data', () => {
        assert.equal( $scope.magazines, testarray );
    });



    it( 'delete magazine', (done) => {

        service.delete = function( id ){
            assert.equal( id, 3 );
            done()
            return Promise.resolve( true );
        }


        $scope.deleteMag(3);
    });



});