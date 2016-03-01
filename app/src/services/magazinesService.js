export default function( ngModule ) {

    ngModule.provider( 'magazinesService', function (  ) {
        var url = 'http://localhost:3000';

        this.setUrl = function( setUrl ) {
         	url = setUrl;
        };

        //this.successCallback= function(){console.log('success');};
        //this.errorCallback = function(){console.log('that did not work');};

        this.$get = function ( $http ) {
            return {

                get(){
                    return $http.get( url + '/api/magazines' )
                        .then( res => {
                        return res.data;
                    });
                },

                addNew(newMagazine){
                    return $http.post( url + '/api/magazines', newMagazine);
                 },

                delete(id){
                    console.log ('delete request for id : ', id);
                    return $http.delete( url + '/api/magazines:'+ id );
                 }
            };
        };
    });
}

