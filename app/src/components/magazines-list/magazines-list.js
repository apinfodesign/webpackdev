import template from './magazines-list.html';
import filters from '../../filters';

export default function( ngModule ) {

    ngModule.directive( 'magazinesList', function(){

        return {
            replace: true,
            restrict: 'E',
            template,
                scope: {
                    magazine: '=',
                    saved: '&'
                },
            controller:[ '$scope', 'magazinesService', function( $scope, magazinesService ) {

                $scope.search = {};

                $scope.compare = function (actual, expected) {
                    if (isNaN(expected)) {
                        return actual.toLowerCase().indexOf(expected) > -1;
                    }
                    else {
                        return actual > +expected;
                    }
                };

                $scope.play = true;

                magazinesService.get().then(magazines => {
                    $scope.magazines = magazines;
                    $scope.avg = average($scope.magazines);  //works!
                    $scope.biggerThanAverage = function (actual, avg) {
                        console.log(actual, avg, ' is actual and average');
                        return actual > +avg;
                    };

                    $scope.applyAverage = function () {
                        if (!$scope.ageInput) {
                            $scope.ageInput = {age: $scope.avg};
                        }
                        else {
                            $scope.ageInput = null;
                        }
                    };

                    function average(array) {
                        if (!array) {
                            return;
                        }
                        else {
                            var total = 0;
                            for (var i = 0; i < array.length; i++) {
                                total = total + (parseInt(array[i].age)  );
                            }
                            console.log(total / array.length, ' is average');
                            return ( ( total / array.length ) );
                        }
                    }

                   // $scope.$apply();
                });

                $scope.avg = average($scope.magazines);

                $scope.biggerThanAverage = function (actual, avg) {
                    console.log(actual, avg, ' is actual and average');
                    return actual > +avg;
                };

                $scope.applyAverage = function () {
                    if (!$scope.ageInput) {
                        $scope.ageInput = {age: $scope.avg};
                    }
                    else {
                        $scope.ageInput = null;
                    }
                };

                function average(array) {
                    if (!array) {
                        return;
                        }
                    else {
                        var total = 0;
                        for (var i = 0; i < array.length; i++) {
                            total = total + (parseInt(array[i].age)  );
                        }
                        console.log(total / array.length, ' is average');
                        return ( ( total / array.length ) );
                    }
                }


            }]
        };
    });
}



