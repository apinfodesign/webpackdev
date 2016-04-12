import template from './login.html';

export default function( ngModule ) {

    ngModule.directive( 'login', function() {
        return {
            replace: true,
            restrict: 'E',
            template,
            scope: {
                success: '&'
            },
            controller ( $scope, $auth, $state, $http ) {

                $scope.authenticate = function( provider ) {
                    $auth.authenticate( 'twitter' )
                        .then( response => {
                            $state.transitionTo( 'mybookmarks' );
                        })
                        .catch( response => {
                            alert( 'problem!' );
                        });
                };

                $scope.authloggedin= $auth.isAuthenticated;

                ////user name password reg

                $scope.list = [];

                $scope.text = 'login attempt ';

                $scope.submit = function(User ) {
                    if ($scope.text) {
                        $scope.list.push(this.text);
                        $scope.text = '';
                    }

                    console.log('User', User);
                    console.log(User.username +'  '+ User.password);

                    $auth.login(User);

                    var theurl = 'http://localhost:3000';

                    $http.post( 'http://localhost:3000/auth/login', User)


                };


            }

        };
    });
}


// $auth.isAuthenticated