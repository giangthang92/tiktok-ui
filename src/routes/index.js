//Layout
import { HeaderOnly } from '~/components/Layouts';

import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import UpLoad from '~/pages/UpLoad';
import Search from '~/pages/Search';

// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: UpLoad, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

// Private Routes
const privateRoutes = [];

// Export
export { publicRoutes, privateRoutes };
