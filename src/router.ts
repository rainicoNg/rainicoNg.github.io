import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
	{
		path: "/",
		component: () => import("./views/Home.vue")
	},
	{
		path: "/rainicong.github.io/",
    name: "Home",
    component: () => import("./views/Home.vue")
	},
	{
		path: "/rainicong.github.io/#/lucky-draw",
		name: "Lucky Draw",
		component: () => import("./views/LuckyDraw.vue"),
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});
export default router;