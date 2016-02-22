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


            controller:    [ '$scope', function( $scope ){

                    $scope.update = function() {
                        $scope.$parent.magazine = angular.copy($scope.edit);
                    };

                    $scope.reset = function() {
                        $scope.edit = angular.copy($scope.magazine);
                    };

                    $scope.reset();

                }]
            };
        });
    }