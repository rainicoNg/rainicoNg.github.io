import { createApp } from "vue";
import App from "./App.vue";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import { createI18n } from "vue-i18n";
import messages from "./messages";
import router from "./router";
import { getLanguage } from "./utils/helper";

const i18n = createI18n({
  legacy: false,
	globalInjection: true,
	fallbackLocale: {
		"zh-TW": ["zh-Hant"],
		"zh-HK": ["zh-Hk"],
		"en-US": ["en"],
		"default": ["en"]
	},
	locale: getLanguage(navigator.language),
	silentFallbackWarn: true,
	messages
});

const vuetify = createVuetify({
  components,
  directives,
	ssr: true,
	theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#D7ECFA",
          secondary: "#BAA280"
        }
      },
    },
  }
});

createApp(App).use(vuetify).use(router).use(i18n).mount("#app");
