import angular from 'angular';

//import magazinesService from './magazinesService';
//import nextUsersService from './nextUsersService';

import resources from './resources';


const services = angular.module( 'services', [] );

//working version
//services.constant( 'apiUrl', 'http://localhost:3000/' );

const baseUrl = 'http://localhost:3000/' ;

services.config( [ '$provide', function( $provide ){
    $provide.constant( 'baseUrl', baseUrl );
}]);


resources( services );

export default services.name;

//working version
//magazinesService( services );
//nextUsersService( services );
////


export default services.name;



/////////////////////////////////////////////////////////////////////////
///PETS example
//import angular from 'angular';
//import resources from './resources';
//
//const services = angular.module( 'services', [] );
//
//// TODO: move to env and config
//const baseUrl = 'http://localhost:3000/api/v1';
//
//services.config( [ '$provide', function( $provide ){
//    $provide.constant( 'baseUrl', baseUrl );
//}]);
//
//resources( services );
//
//export default services.name;