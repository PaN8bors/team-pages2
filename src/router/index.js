import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
// import ProfileView from "../views/ProfileView.vue";
import DetailsView from "@/components/DetailsView.vue";
import GalleryView from "../views/GalleryView.vue";
// import DetailsComponent from "@/components/DetailsComponent";

const routes = [
	{
		path: "/",
		name: "home",
		component: GalleryView
	},
	// {
	// 	path: "/profile/:id",
	// 	name: "Profile",
	// 	component: ProfileView,
	// },
	// {
	// 	path: "/about",
	// 	name: "About",
	// 	component: AboutView,
	// },
	// {
	// 	path: "/gallery",
	// 	name: "Gallery",
	// 	component: GalleryComponent,
	// },
	{
		path: "/details/:id",
		name: "Details",
		component: DetailsView
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
