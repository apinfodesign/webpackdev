import angular from 'angular';

import magazineEdit from './magazine-edit/magazine-edit';

import magazinesList from './magazines-list/magazines-list';

//import formControl from './form-Control/form-control';

const components = angular.module( 'components', [] );

magazineEdit( components );
magazinesList (components );
//formControl( components );

export default components.name;