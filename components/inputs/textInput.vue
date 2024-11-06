<template>
	<typography-label :required="required" :label="label" :id="id" v-if="!noLabel"></typography-label>
	<v-text-field v-model="model"
				  :rules="[...defaultRules, ...props.rules]"
				  persistent-placeholder
				  :persisted-hint="persistedHint"
				  :suffix="suffix"
				  :id="id"
				  ref="input"
				  :color="color('on-surface')"
				  :persistent-hint="persistentHint"
				  :base-color="color('outline')"
				  :width="width"
				  :disabled="disabled"
				  :readonly="readonly"
				  :hint="hint"
				  validate-on="input"
				  :max-width="maxWidth"
				  :min-width="minWidth"
				  :placeholder="placeholder"
				  :autocomplete="autocomplete"
				  :append-inner-icon="appendInnerIcon"
				  :hide-details="hideDetails"
				  :variant="variant"
				  :density="density"
				  :type="type"
				  :bg-color="bgColor">
	</v-text-field>
</template>

<script setup lang="ts">
import {
	onlyNumbersRule,
	prepareMaxNumbersRule,
	prepareMinLengthRule,
	prepareMinNumbersRule,
	requiredRule
} from "@/utils/validation";
import { isNumber } from "lodash-es";
import { useColors } from "@/composables/useColors";


const { t } = useLocale();
const { color } = useColors();

const model = defineModel<string | number | Date | null | undefined>();
const input = ref<HTMLInputElement>();

export interface Props {
	id?: string;
	disabled?: boolean;
	autocomplete?: string;
	label?: string;
	placeholder?: string;
	hint?: string;
	type?: string;
	required?: boolean;
	hideDetails?: boolean;
	persistentHint?: boolean;
	number?: boolean;
	noLabel?: boolean;
	minLength?: number;
	appendInnerIcon?: string;
	density?: "default" | "comfortable" | "compact";
	variant?: "filled" | "underlined" | "outlined" | "plain" | "solo" | "solo-inverted" | "solo-filled";
	bgColor?: string;
	min?: number;
	max?: number;
	width?: number | string;
	maxWidth?: number | string;
	minWidth?: number | string;
	rules?: ((value: any) => string | boolean)[];
	persistedHint?: string;
	suffix?: string;
	readonly?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	autocomplete: "off",
	rules: () => [],
	density: "compact",
	disabled: false,
	persistentHint: false
});

const defaultRules = computed(() => {
	const rules: any = [];
	
	if(props.required)
		rules.push(requiredRule());
	
	if(props.minLength)
		rules.push(prepareMinLengthRule({ minLength: props.minLength }));
	
	if(props.number) {
		rules.push(onlyNumbersRule());
	}
	
	if(isNumber(props.min)) {
		rules.push(prepareMinNumbersRule({ getMin: () => props.min }));
	}
	
	if(isNumber(props.max)) {
		rules.push(prepareMaxNumbersRule({ getMax: () => props.max }));
	}
	
	return rules;
});

const label = computed(() => {
	return props.label || t(`fields.${props.id}.label`);
});
const placeholder = computed(() => {
	return props.placeholder || t(`fields.${props.id}.placeholder`);
});

defineExpose({ input });
</script>

