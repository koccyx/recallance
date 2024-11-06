import vuetifyColors from "vuetify/lib/util/colors.mjs";
import { useTheme } from "vuetify";
import type { ThemeInstance } from "vuetify";
import { isNil } from "lodash-es";

export function useColors() {
	const { current } = useTheme();
	const currentThemeColors = current.value.colors;

	const colors: Record<string, ThemeInstance | string | any> = {
		...vuetifyColors,
		...currentThemeColors
	};

	// Аналог утилиты color в стилях
	const color = (color: string, alpha?: number) => {
		let hexAlpha;

		if(!isNil(alpha))
			hexAlpha = Math.floor(alpha * 255).toString(16).padStart(2, "0");

		return colors[color] + (hexAlpha ?? "");
	};

	return {
		colors,
		color
	};
}
