import { createRouter, createWebHistory } from "vue-router";
const routes = [
	{
		path: "/",
		component: () => import("./views/LuckyDraw.vue"),
	},
	{
		path: "/rainicong.github.io/",
		name: "Home",
		component: () => import("./views/LuckyDraw.vue"),
	},
	{
		path: "/rainicong.github.io/lucky-draw",
		name: "Lucky Draw",
		component: () => import("./views/LuckyDraw.vue"),
	}
];

const router = createRouter({
	history: createWebHistory("/rainicong.github.io/"),
	routes,
});
export default router;