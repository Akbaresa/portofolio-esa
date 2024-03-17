import App from "@/App.vue";
import ShipperCard from "@/components/web_developer/ShipperCard.vue";
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes :[
        {
            path: '/',
            name: 'app',
            component: App,
            children :
            [
                {
                    path: '/shipper',
                    name: 'shipper-card',
                    component: ShipperCard,
                }
            ]
        },
    ]
})

export default router