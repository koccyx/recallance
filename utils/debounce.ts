export function debounce<T extends (...args: any[]) => any>(func: T, delay: number): (...args: Parameters<T>) => void {
	let timerId: ReturnType<typeof setTimeout>;
	
	return function (...args: Parameters<T>) {
		const context = this;
		
		// Очищаем предыдущий таймер
		clearTimeout(timerId);
		
		// Устанавливаем новый таймер
		timerId = setTimeout(() => {
			func.apply(context, args);
		}, delay);
	};
}