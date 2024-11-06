import "vuetify/styles";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { h } from "vue";
import { ru } from "vuetify/locale";
import { createVuetify, type ThemeDefinition } from "vuetify";
import { VNumberInput } from "vuetify/labs/VNumberInput";
import { VDataTable } from "vuetify/components/VDataTable";
import { defineNuxtPlugin } from "nuxt/app";


const light: ThemeDefinition = {
	dark: false,
	colors: {
		primary: "#7C0000",
		"on-primary": "#FFFFFF",
		"primary-container": "#ffdad6",
		"on-primary-container": "#410002",

		secondary: "#3C4648",
		"secondary-background": "#F7F9FC",
		"secondary-disabled": "#8B9596",
		"on-secondary": "#ECECEC",

		tertiary: "#715b2e",
		"on-tertiary": "#ffffff",
		"on-tertiary-container": "#F8F8F8",

		background: "#F5F6F6",
		"on-background": "#0A1729",
		"background-on-surface-disabled": "#201A19",

		surface: "#fffbff",
		"on-surface": "#201a19",

		outline: "#936E6A",
		"outline-variant": "#593B38",

		white: "#FFFFFF",
		"white-darken-1": "#F2F4F8",

		// todo
		"neutral-30": "#4D4847",

		alert: "#D300000D",
		"alert-text": "#D30000",

		error: "#AF133A",
		info: "#045399",
		success: "#069B50",
		warning: "#E27806"
	}
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default defineNuxtPlugin((app) => {
		const vuetify = createVuetify({
			aliases: {
				UDataTable: VDataTable
			},
			icons: {
				aliases: {
					...aliases,
					logo: "u:ico_logo"
				},
				sets: {
					mdi,
					u: {
						// @ts-ignore
						component: (props) => h(UIcon, { ...props, src: props.icon })
					}
				}
			},
			components: {
				VNumberInput
			},
			theme: {
				defaultTheme: "light",
				themes: {
					light
				}
			},
			defaults: {
				VDataTable: {
					loadingText: "Загрузка",
					itemsPerPage: -1,
					mustSort: true,
					hideDefaultFooter: true,
					sortAscIcon: "u:ico_sort-asc",
					sortDescIcon: "u:ico_sort-desc",
					itemValue: "id",
					density: "compact",
					class: "u-data-table"
				},
				VBtn: {
					variant: "flat",
					color: "primary"
				},
				VTextField: {
					variant: "outlined"
				},
				VChipGroup: {
					color: "primary",
					variant: "flat",
					mandatory: true
				},
				VChip: {
					color: "primary"
				},
				VNumberInput: {
					variant: "outlined",
					inset: true,
					controlVariant: "stacked"
				},
				VTextarea: {
					variant: "outlined"
				},
				VAutocomplete: {
					variant: "outlined",
					autocomplete: "off",
					density: "compact",
					menuProps: { contentClass: "u-menu" }
				},
				VPagination: {
					class: "u-pagination",
					density: "comfortable",
					totalVisible: 6,
					showFirstLastPage: true
				},
				VMenu: {
					VList: {
						elevation: 0,
						color: "primary"
					},
					offset: 4
				},
				VSelect: {
					density: "compact",
					variant: "outlined"
				}
			},
			locale: {
				locale: "ru",
				messages: { ru }
			}
		});
		app.vueApp.use(vuetify);
	}
);
