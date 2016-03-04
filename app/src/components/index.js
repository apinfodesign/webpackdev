import angular from 'angular';
import app from './app/app';

import welcome from './welcome/welcome-list';

import magazinesList from './magazines-list/magazines-list';
import magazineEdit from './magazine-edit/magazine-edit';

import usersList from './users-list/users-list';
//import usersEdit from './user-edit/user-edit';

import userBookmarksList from './mybookmarks-list/userBookmarks-list';

import aboutList from './about-list/about-list';
import login from './login/login';
import register from './register/register';
import logout from './log-out/log-out';


const components = angular.module( 'components', [] );

welcome( components );
app( components );
magazineEdit( components );
magazinesList( components );
aboutList( components );
usersList( components );
//usersEdit( components );

login( components );
logout( components );
userBookmarksList( components );
register( components );

export default components.name;