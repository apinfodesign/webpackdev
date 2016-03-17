export default function( ngModule ) {

    ngModule.provider( 'nextUsersService', function (  ) {
        var url = 'http://localhost:3000';

        this.setUrl = function( setUrl ) {
            url = setUrl;
        };

        //this.successCallback= function(){console.log('success');};
        //this.errorCallback = function(){console.log('that did not work');};

        this.$get = function ( $http ) {

            console.log('url is: ', url);

            return {

                get(){
                    return $http.get( url + '/api/users' )
                        .then( res => {

                            console.log(res.data);



                            return res.data;
                        });
                },

                addNew(newUser){
                    return $http.post( url + '/api/users', newMagazine);
                },

                delete(id){
                    console.log ('delete request for id : ', id);
                    return $http.delete( url + '/api/users:'+ id );
                }
            };
        };
    });
}