import { ru } from "@/locales/ru";

const RU_LOCALE_ALIAS = "ru";

export default defineI18nConfig(() => ({
	legacy: false,
	locale: RU_LOCALE_ALIAS,
	fallbackLocale: RU_LOCALE_ALIAS,
	messages: {
		ru
	}
}));