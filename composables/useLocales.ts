import type { ru } from "@/locales/ru";

export function useLocales() {
	return useI18n<[typeof ru], "ru">();
}
