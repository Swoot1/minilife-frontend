import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import NewItem from './components/NewItem.vue';
import Timeline from './components/Timeline.vue';
import ViewItem from './components/ViewItem.vue';
import EditItem from './components/EditItem.vue';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './components/About.vue')
        },
        {
            path: '/newitem',
            name: 'newitem',
            component: NewItem
        },
        {
            path: '/timeline',
            name: 'timeline',
            component: Timeline
        },
        {
            path: '/items/:id',
            name: 'viewitem',
            component: ViewItem
        },
        {
            path: '/items/:id/edit',
            name: 'itemedit',
            component: EditItem
        }
    ]
})
