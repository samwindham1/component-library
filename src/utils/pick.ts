export const pick = <T>(object: T, keys: string[]): Partial<T> => {
    return Object.keys(object)
        .filter((key) => keys.includes(key as string))
        .reduce((o, key) => ({ ...o, [key]: object[key as keyof T] }), {});
};
