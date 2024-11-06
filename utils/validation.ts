import PasswordValidator from "password-validator";
import i18n from "~/utils/i18n";

const passwordValidator = new PasswordValidator();
passwordValidator.is().min(8, "Не менее 8 символов").is().max(100, "Не более 100 символов");

export const requiredRule = () => {
	return (v: string) => v !== "" && !/^[\s]+$/.test(v) && !!v || i18n.global.t("validation.required");
};

export const requiredAutocompleteValueRule = (requiredKey: string) => {
	return (v: any) => v !== null && !!v[requiredKey] || i18n.global.t("validation.required");
};

export const requiredMultipleAutocompleteRule = () => {
	return (v: any) => v !== null && !!v.length || i18n.global.t("validation.required");
};

export const prepareMaxLengthRule = ({ maxLength, returnBoolean }: { maxLength: number, returnBoolean?: boolean }) => {
	return (v: string | any[]) => !v || v.length <= maxLength ||
		(returnBoolean ? false : `${i18n.global.t("validation.maxLength", { number: maxLength })}`);
};

export const prepareMinLengthRule = ({ minLength }: { minLength: number }) => {
	return (v: string | any[]) => !v || v.length >= minLength || `${i18n.global.t("validation.minLength", { number: minLength })}`;
};


export const prepareMaxNumbersRule = ({ getMax }: { getMax: any }) => {
	return (v: string | number) => v === "" || v <= getMax() || i18n.global.t("validation.maxNumber", { number: getMax() });
};

export const prepareMinNumbersRule = ({ getMin }: { getMin: any }) => {
	return (v: string | number) => v === "" || v >= getMin() || i18n.global.t("validation.minNumber", { number: getMin() });
};

export const prepareEmailRule = () => {
	return (v: string) => !v || /.+@.+\..+/i.test(v) || i18n.global.t("validation.validEmail");
};

export const prepareTimeRule = () => {
	return (v: string) => !v || /^(?:[01]?\d|2[0-3])(?::[0-5]\d){1,2}$/i.test(v) || i18n.global.t("validation.validTime");
};

export const prepareUniqRule = ({ getValue, message }: { getValue: any, message: string }) => {
	return (v: any) => !v || getValue() !== v || message;
};

export const prepareConfirmedEmailRule = ({ getEmail }: { getEmail: any }) => {
	return (v: any) => !v || getEmail() === v || i18n.global.t("validation.validConfirmedEmail");
};

export const preparePasswordRule = () => {
	return (v: string) => {
		let result = passwordValidator.validate(v, { details: true }) as { message: string }[];
		return result.length ? result[0].message : true;
	};
};

export const prepareConfirmedPasswordRule = (getPassword: Function) => {
	return (v: string) => !v || !getPassword() || getPassword() === v || "Пароли не совпадают";
};

export const onlyIntegerNumbersRule = () => {
	return (v: string) => !v || /^[-\d]+$/.test(v) || i18n.global.t("validation.validOnlyIntegerNumbers");
};

export const onlyNumbersRule = () => {
	return (v: string) => !v || /^[-\d\.]+$/.test(v) || i18n.global.t("validation.validOnlyNumbers");
};

export const onlyLatinRule = () => {
	return (v: string) => !v || /^[a-zA-Z\s]+$/.test(v) || i18n.global.t("validation.validOnlyLatin");
};

/* Временные проверки */
export const passwordRule = () => {
	return (v: string | string[]) => !v || v.includes("test") || i18n.global.t("validation.validPassword");
};

export const prepareUniqValueRule = ({ getAnotherVal }: { getAnotherVal: any }) => {
	return (v: any) => {
		return !getAnotherVal() || !v || getAnotherVal() !== v || i18n.global.t("validation.uniqValue");
	};
};


export const maxLengths = {
	search: 50,
	short: 50,
	middle: 100,
	long: 500,
	text: 1000
};
