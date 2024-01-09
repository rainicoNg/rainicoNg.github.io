<script setup lang="ts">
import { ref, computed } from "vue";
import { Theme } from "./utils/types";
import TopBar from "../src/components/TopBar.vue";

const selectedTheme = ref<number>(Theme.LIGHT);

const themeClass = computed(() => ({
  lightColor: selectedTheme.value === Theme.LIGHT,
	darkColor: selectedTheme.value === Theme.DARK,
}));

function onThemeChange(val: number) {
	selectedTheme.value = val;
}
</script>

<template>
	<div 
		class="mainContainer" 
		:class="themeClass"
	>
		<TopBar 
			@theme-change="onThemeChange" 
			:theme="selectedTheme"
		/>
		<div class="pageContainer">
			<router-view 
				:theme="selectedTheme"
			/>
		</div>
	</div>
</template>

<style>
@import "./utils/variable.css";

html, body, #app, .mainContainer {
	height: 100%;
	scroll-behavior: smooth;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	
	/* padding: 24px; */
}

.pageContainer {
	max-width: 800px;
	margin: 0 auto;
}

.pageHeader {
	text-align: start;
	font-size: 20px;
	font-weight: 600;
}

.link {
	font-family: "Courier New", monospace;
	text-decoration: none;
	color: #000000;
	font-size: 18px;
	border-bottom: 2px solid transparent;
}

.link.selected {
	border-bottom: 2px solid #000000;
}

.main {
	font-weight: 900;
	font-family: "Courier New", monospace;
	text-decoration: none;
	color: #000000;
	font-size: 28px;
}

.clickable {
	cursor: pointer;
}

.lightColor {
	background-color: var(--secondary-color);
	color: var(--primary-color);
}

.darkColor {
	background-color: var(--primary-color);
	color: var(--secondary-color);
}

.light {
	background: var(--primary-color);
	color: var(--secondary-color);
}
.dark {
	background: var(--secondary-color);
	color: var(--primary-color);
}

img {
  user-select: none !important;
  -webkit-user-drag: none;
	pointer-events: none;
}
@media screen and (max-width: 600px) {
	.main {
		font-size: 18px;
	}

	.link {
		font-size: 12px;
		font-weight: 600;
	}
}
</style>
