import angular from 'angular';
import pets from './magazines/magazines';

const views = angular.module( 'views', [] );

views.config( function( $stateProvider ) {
    magazines( $stateProvider );
    // $stateProvider.state( 'pets', pets );
});

export default views.name;