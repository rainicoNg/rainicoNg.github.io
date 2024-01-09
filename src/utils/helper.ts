export const getLanguage = (lang: string) => {
	switch (lang) {
		case "zh-TW":
			return "zh-Hant";
		case "zh-Hans":
			return "zh-Hans";
		default:
		case "en-US":
			return "en";
	}
};