import template from './magazines-list.html';
import filters from '../../filters';
import styles from './magazines-list.scss';
//import styles from './app.scss';

//components enters as ngModule
export default function( ngModule ) {

    ngModule.directive( 'magazinesList', function(){

        return {
            replace: true,
            restrict: 'E',
            template,
                scope: {
                    magazines: '='
                 },
            controller:[ '$scope', 'magazinesService',
                function( $scope, magazinesService ) {

                $scope.compare = function (actual, expected) {
                    if (isNaN(expected)) {
                        return actual.toLowerCase().indexOf(expected) > -1;
                    }
                    else {
                        return actual > +expected;
                    }
                };

                $scope.avg = average($scope.magazines);  //works!

                $scope.biggerThanAverage = function (actual, avg) {
                    return actual > +avg;
                    };

                $scope.deleteMag = function(magazine){
                    console.log("DELETE BUTTON", magazine);
                    magazinesService.delete(magazine._id)
                        .then( () => {
                            console.log('deleting', magazine._id);
                        var index = $scope.magazines.indexOf(magazine);
                            if (index !== -1){
                            $scope.magazines.splice(index,1);
                            }
                         })
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



