export const debounce = (func: { apply: (arg0: any, arg1: any[]) => void }) => {
    let timer: NodeJS.Timeout | null;
    return function (...args: any) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            func(...args);
        }, 500);
    };
};
