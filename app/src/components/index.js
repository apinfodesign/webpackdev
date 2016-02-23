import angular from 'angular';
import magazineEdit from './magazine-edit/magazine-edit';
import magazinesList from './magazines-list/magazines-list';

const components = angular.module( 'components', [] );

magazineEdit( components );
magazinesList (components );

export default components.name;