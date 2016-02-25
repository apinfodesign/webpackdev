import template from './magazine-edit.html';

export default function( ngModule ) {


    ngModule.directive( 'magazineEdit', function(){

        return {
            replace: true,
            restrict: 'E',
            template,
                scope: {
                    magazine: '=',
                    saved: '&'
                },
            controller:[ '$scope', 'magazinesService', function( $scope, magazinesService ){

                    $scope.update = function() {
                        $scope.$parent.magazine = angular.copy($scope.edit);
                    };

                    $scope.reset = function() {
                        $scope.edit = angular.copy($scope.magazine);
                    };

                    $scope.reset();


                    $scope.addNew = function(newMagazine) {
                        magazinesService.addNew( angular.copy($scope.edit) );
                        $scope.reset();
                    };

                }]
            };
        });
    }