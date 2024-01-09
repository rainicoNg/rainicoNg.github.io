import { createRouter, createWebHistory } from "vue-router";
const routes = [
	{
		path: "/rainicong.github.io/lucky-draw",
		name: "Lucky Draw",
		component: () => import("./views/LuckyDraw.vue"),
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;