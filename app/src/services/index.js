import angular from 'angular';
import magazinesService from './magazinesService';

const services = angular.module( 'services', [] );

magazinesService( services );

export default services.name;