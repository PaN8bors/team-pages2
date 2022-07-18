import { createRouter, createWebHistory } from "vue-router";
import DetailsView from "@/components/DetailsView.vue";
import GalleryView from "../views/GalleryView.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: GalleryView
	},
	{
		path: "/details/:userId",
		name: "Details",
		component: DetailsView
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { top: 0}
		}
	}
});

export default router;
