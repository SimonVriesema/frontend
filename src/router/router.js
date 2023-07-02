import {createRouter, createWebHashHistory} from "vue-router";

import LandingPage from "@/views/LandingPage";

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/landing',
            name: 'Landingspage',
            component: LandingPage
        },
    ]
})