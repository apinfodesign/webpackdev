export default function( ngModule ) {

    //const apiUrl = 'localhost:3000';

    ngModule.provider( 'magazinesService', function (  ) {

        var url;

         this.setUrl = function( setUrl ) {
         	url = setUrl;
         };

        this.successCallback= function(){console.log('success');}

        this.errorCallback = function(){console.log('that did not work');}


        this.$get = function ( $http ) {
            return {

                get(){
                    return $http.get( url + '/api/magazines' )
                        .then( res => {
                        return res.data;
                    });
                },

                addNew(newMagazine){
                    console.log('htttp add new');
                    $http.post( url + '/api/magazines', newMagazine)
                    .then(successCallback, errorCallback);
                }


            };
        };



    });

}

