<template>
	<typography-label :color="colors.secondary" :id="id" :label="label" :required="required" v-if="!noLabel"></typography-label>
	<v-textarea v-model="model"
				row-height="25"
				rows="2"
				no-resize
				:color="colors.secondary"
				:id="id"
				:rules="[...defaultRules, ...props.rules]"
				:placeholder="placeholder"
				:autocomplete="autocomplete"
				:append-inner-icon="appendInnerIcon"
				:variant="variant"
				v-maska="maskaOptions"
				:disabled="disabled"
				:bg-color="bgColor">
	</v-textarea>
</template>

<script setup lang="ts">
import { useLocales } from "@/composables/useLocales";
import {
	onlyNumbersRule,
	prepareMaxNumbersRule,
	prepareMinLengthRule,
	prepareMaxLengthRule,
	prepareMinNumbersRule,
	requiredRule
} from "@/utils/validation";
import { isNumber } from "lodash-es";
import { useColors } from "@/composables/useColors";

const { colors } = useColors();

const { t } = useLocales();

const model = defineModel<string | null | undefined>();

export interface Props {
	id: string;
	autocomplete?: string;
	label?: string;
	placeholder?: string;
	required?: boolean;
	number?: boolean;
	noLabel?: boolean;
	minLength?: number;
	maxLength?: number;
	appendInnerIcon?: string;
	variant?: "underlined" | "filled" | "outlined" | "plain" | "solo" | "solo-inverted" | "solo-filled";
	bgColor?: string;
	min?: number;
	max?: number;
	rules?: ((value: any) => string | boolean)[];
	mask?: string;
	disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	autocomplete: "off",
	rules: () => []
});

const defaultRules = computed(() => {
	const rules: any = [];
	
	if(props.required)
		rules.push(requiredRule());
	
	if(props.minLength)
		rules.push(prepareMinLengthRule({ minLength: props.minLength }));
	
	if(props.maxLength)
		rules.push(prepareMaxLengthRule({ maxLength: props.maxLength }));
	
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

const maskaOptions = reactive({
	mask: props.mask,
	eager: true
});

const label = computed(() => {
	return props.label || t(`fields.${props.id}.label`);
});
const placeholder = computed(() => {
	return props.placeholder || t(`fields.${props.id}.placeholder`);
});


</script>

