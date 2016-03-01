import angular from 'angular';
import magazinesService from './magazinesService';

const services = angular.module( 'services', [] );

services.constant( 'apiUrl', 'http://localhost:3000/' );
magazinesService( services );

export default services.name;