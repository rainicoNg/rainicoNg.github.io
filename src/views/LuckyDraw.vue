<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const selectedDrawSet = ref<{name: string, options: string[]}>();
const drawItems = ref<string[]>([]);
const newDrawItem = ref<string>();
const defaultOptionSets = ref<{name: string, options: string[]}[]>([
	{
		name: "food",
		options: ["Western", "Taiwanese", "Japanese", "Korean", "Kong", "Thai", "Vietnamese"]
	},
	{
		name: "palette",
		options: ["white", "black", "gray", "yellow", "blue"]
	},	{
		name: "number",
		options: ["0", "1", "2", "3", "4","5", "6", "7", "8", "9"]
	}
]);
const drawOptions = ref<string[]>([]);
const drawResult = ref<string>("");

const setDrawItem = (optionSet: string) => {
	const targetSet = defaultOptionSets.value.find(s => s.name === optionSet);
	if (targetSet) {
		drawItems.value = targetSet.options;
	}
};

const resetDrawItem = () => {
	drawItems.value = [];
	drawResult.value = "";
	selectedDrawSet.value = undefined;
};

const addDrawItem = (option?: string) => {
	if (option && option.trim() !== "") {
		if (!drawItems.value.includes(option.trim())) {
			drawItems.value.push(option.trim());
			newDrawItem.value = "";
		}
	}
};

const removeDrawItem = (option: string) => {
	drawItems.value = drawItems.value.filter(opt => opt !== option);
};

const draw = () => {
	if (drawItems.value.length > 0)
		drawResult.value = drawItems.value[Math.floor(Math.random() * drawItems.value.length)];
	// check draw opt
	for (const opt of drawOptions.value) {
		switch (opt) {
			case "No Repeat":
				drawItems.value = drawItems.value.filter(opt => opt !== drawResult.value);
				break;
		}
	}
};

const actionBtnDraw = () => {
	if (drawResult.value === "") draw();
};
</script>

<template>
	<v-container class="mainContainer">
		<div class="my-4 mx-3 text-h3">{{ t("titleLuckyDraw") }}</div>
				<v-row class="ma-0 justify-space-between">
					<v-col cols="12" md="4">
						<v-select
							v-model="selectedDrawSet"
							:items="defaultOptionSets"
							:label="t('fieldDrawSet')"
							item-title="name"
							variant="outlined"
							density="compact"
						>
							<template v-slot:item="{ props, item }">
								<v-list-item 
									v-bind="props" 
									:subtitle="item.raw.options.join()"
									@click="setDrawItem(props.title as string)"
								></v-list-item>
							</template>
						</v-select>
					</v-col>
					<v-col cols="12" md="6">
						<v-select
							:label="t('fieldOptions')"
							variant="outlined"
							density="compact"
							chips
							:items="['No Repeat']"
							multiple
							v-model="drawOptions"
						></v-select>
					</v-col>
				</v-row>
			
			<v-col cols="12" class="gy-2">
				<div class="my-4">
					<div class="text-h5">{{ t("titleDrawPool") }}</div>
					<div class="d-flex flex-wrap pa-4 optionContainer">
						<div v-for="opt in drawItems" :key="opt">
							<v-btn 
								variant="flat" 
								rounded="xl" 
								size="small"
								:ripple="false" 
								append-icon="mdi-close-circle" 
								class="ma-1"
								@click="removeDrawItem(opt)"
							>
								{{ opt }}
								<template v-slot:append>
									<v-icon color="#BAA280"></v-icon>
								</template>
							</v-btn>
						</div>
					</div>
				</div>
				<v-row 
					class="ma-0"
					:class="{'justify-space-between': drawItems.length > 0, 'justify-end': drawItems.length <= 0}"
					>
					<v-btn
						v-if="drawItems.length > 0" 
						variant="flat"
						color="#BAA280"
						prepend-icon="mdi-delete-empty" 
						class="my-4"
						@click="resetDrawItem"
					>{{ t("actionClear") }}</v-btn>
					<v-col cols="12" md="4" class="px-0">
						<v-text-field
							v-model="newDrawItem"
							type="input" 
							:label="t('fieldNewDrawItem')"
							density="compact"
							variant="outlined"
							single-line
							append-inner-icon="mdi-plus-circle"
							@click:append-inner="addDrawItem(newDrawItem)"
						></v-text-field>
					</v-col>
				</v-row>
				
				<v-row class="justify-center">
					<v-col cols="12" md="6">
						<div
						class="ma-1 draw"
						:class="{ btn: drawResult === '', chip: drawResult !== '' }"
						@click="actionBtnDraw"
						>
						{{ drawResult === "" ? t("actionDraw") : drawResult }}
						<v-btn 
							v-if="drawResult" 
							class="refreshBtn" 
							variant="flat"
							size="x-large"
							density="compact" 
							color="#BAA280"
							icon="mdi-refresh" 
							@click="draw"></v-btn>
							</div>
					</v-col>
				</v-row>
				
			</v-col>
	</v-container>
</template>

<style scoped>
html {
	background-color: #D7ECFA;
}

.mainContainer {
	text-align: left;
}
.optionContainer {
	background-color: #648CA5;
	border-radius: 8px;
	min-height: 100px;
}

.btn {
	cursor: pointer;
	background-color: #648CA5;
	border: 2px solid #648CA5;
	color: #fff;
}

.chip {
	background-color: #ffffff;
	border: 2px solid #BAA280;
	color: black;
}

.draw {
	padding: 24px;
	font-size: 36px;
	border-radius: 90px;
	position:relative;
	align-items: center;
	text-align: center;
}

.refreshBtn {
	position: absolute;
  right: 24px;
	margin-top: auto;
	margin-bottom: auto;
	top: 0;
	bottom: 0;
}
</style>
