import { ru } from "~/locales/ru";
import { createI18n } from "vue-i18n";

const RU_LOCALE_ALIAS = "ru";

const i18n = createI18n<[typeof ru], "ru">({
	locale: RU_LOCALE_ALIAS,
	fallbackLocale: RU_LOCALE_ALIAS,
	legacy: false,
	messages: {
		ru
	}
});

export default i18n;
