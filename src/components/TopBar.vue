<script setup lang="ts">
import { ref, PropType, computed } from "vue";
import { useI18n } from "vue-i18n";
import { Theme } from "../utils/types";

const props = defineProps({
	theme: {
		type: Number as PropType<Theme>,
		default: 0
	}
});

// emit theme
const { locale } = useI18n();
const language = ref<{ [key: string]: string }[]>([
	{
		label: "En",
		value: "en"
	}, {
		label: "繁體中文",
		value: "zh-Hant"
	}, {
		label: "廣東話",
		value: "zh-Hk"
	}
]);

const emit = defineEmits<{
	(e: "themeChange", value: number): void
}>();

const currentLang = ref<number>(language.value.findIndex(l => l.value === locale.value)?? 0);
const scrolled = ref<boolean>(false);

const themeClass = computed(() => ({
  light: props.theme === Theme.DARK,
  dark: props.theme === Theme.LIGHT,
	scroll: scrolled.value
}));

function onThemeSelctorClick() {
	if (props.theme === Theme.LIGHT) {
		emit("themeChange", Theme.DARK);
	} else {
		emit("themeChange", Theme.LIGHT);
	}
}

function onLanguageSelectorClick() {
	if (currentLang.value < language.value.length - 1) {
		currentLang.value++;
	} else {
		currentLang.value = 0;
	}
	locale.value = language.value[currentLang.value].value;
}

window.addEventListener("scroll", () => {
	scrolled.value = window.scrollY > 0;
});
</script>

<template>
	<div id="topBar" :class="themeClass">
		<div class="innerContainer row justify-between items-center" >
			<v-row class="align-center">
				<v-btn 
					density="compact" 
					:icon="theme === Theme.LIGHT? 'mdi-lightbulb-on-outline' : 'mdi-lightbulb-on'" 
					variant="flat"
					@click="onThemeSelctorClick"
				></v-btn>
				<div id="languageSelector">
					<v-btn 
						density="compact" 
						variant="outlined"
						@click="onLanguageSelectorClick"
					>{{ language[currentLang].label }}
					</v-btn>
				</div>
			</v-row>	
		</div>
	</div>
</template>

<style>
#topBar {
	position: sticky;
	top: 0;
	z-index: 3;
	width: 100%;
	/* height: 60px; */
}

.innerContainer {
	padding: 16px;
	max-width: 800px;
	margin: 0 auto;
}

.scroll {
	box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
}

#languageSelector, #contactBox {
	width: 100px;
}
</style>