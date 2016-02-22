export default function( app ) {

    app.controller( 'View1Ctrl', [ '$scope', function( $scope ) {

        $scope.dogTypes = [ 'collie', 'poodle', 'lab' ];

        $scope.add = function ( dog ) {
            $scope.dogTypes.push( dog );
        };
    }]);
}