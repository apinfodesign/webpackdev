import angular from 'angular';

import app from './app/app';

import welcome from './welcome/welcome-list';

import magazinesList from './magazines-list/magazines-list';

import magazineTypeDetail from './magazine-type/details/details';

import magazineEdit from './magazine-edit/magazine-edit';

import usersList from './users-list/users-list';
//import usersEdit from './user-edit/user-edit';

import userBookmarksList from './mybookmarks-list/userBookmarks-list';

import login from './login/login';
import register from './register/register';
import logout from './log-out/log-out';

import aboutList from './about-list/about-list';
//import mission from 'mission/mission-list';
//import privacy from 'privacy/privacy-list';

const components = angular.module( 'components', [] );

app( components );
welcome( components );

magazinesList( components );
magazineEdit( components );

//mission ( components );
//privacy ( components );

usersList( components );
userBookmarksList( components );

//usersEdit( components );
login( components );
logout( components );

aboutList( components );

register( components );

export default components.name;