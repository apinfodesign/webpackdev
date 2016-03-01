import angular from 'angular';
import app from './app/app';

import magazinesList from './magazines-list/magazines-list';
import magazineEdit from './magazine-edit/magazine-edit';

import usersList from './users-list/users-list';
//import usersEdit from './user-edit/user-edit';

import aboutList from './about-list/about-list';

const components = angular.module( 'components', [] );

app( components );
magazineEdit( components );
magazinesList( components );
aboutList( components );
usersList( components );
//usersEdit( components );

export default components.name;