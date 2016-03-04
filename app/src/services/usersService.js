
export default function( ngModule ) {

    ngModule.provider( 'usersService', function(){
        var url = 'http://localhost:3000';

        this.setUrl = function( setUrl ) {
            url = setUrl;
        };

        //this.successCallback= function(){console.log('success');};
        //this.errorCallback = function(){console.log('that did not work');};

        this.$get = function ( $http ) {

            console.log('hitting $get in usersService');

            return {

                get(){
                    return $http.get( url + '/api/users' )
                        .then( res => {
                            return res.data;
                        });
                },


                addNew(newUser){
                    return $http.post( url + '/api/users', newUser);
                },

                delete(id){
                    console.log ('delete request for id : ', id);
                    return $http.delete( url + '/api/users:'+ id );
                }



            };
        };
    });
}

