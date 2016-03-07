import angular from 'angular';

import magazinesService from './magazinesService';

import nextUsersService from './nextUsersService';

const services = angular.module( 'services', [] );

services.constant( 'apiUrl', 'http://localhost:3000/' );
magazinesService( services );
nextUsersService( services );

export default services.name;