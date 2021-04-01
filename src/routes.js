/* Components */
import Home from './pages/home.vue';
import PostSingle from "./pages/post-single.vue";
import Register from "./pages/auth/register.vue";
import About from "./pages/about.vue";
import Contact from "./pages/contact.vue";
import Login from "./pages/auth/login.vue";
import TeacherPage from "./pages/teacher-page.vue";
import CoursePage from "./pages/course-page.vue";
import Category from "./pages/category.vue";
import Profile from "./pages/auth/profile/profile.vue";
import Dashboard from "./pages/auth/profile/dashboard.vue";

let routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/post/:post',
        name: 'post-single',
        component: PostSingle
    },
    {
        path: '/signup',
        name: 'signup',
        component: Register
    },
    {
        path: '/signin',
        name: 'signin',
        component: Login
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/teacher/:teacher',
        name: 'teacherPage',
        component: TeacherPage
    },
    {
        path: '/course/:course',
        name: 'courcePage',
        component: CoursePage
    },
    {
        path: '/category/:category',
        name: 'category',
        component: Category
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
        children: [
            {
                path: '/',
                component: Dashboard,
            }
        ],
    },
];

export default routes;
