const tryGetValue = <T>(object: T, key: keyof T) => {
    try {
        return object[key];
    } catch (error) {
        throw new Error(`Unable to get key '${key}' from object.\nObject: ${object}`);
    }
};

const trySetValue = <T>(object: T, key: keyof T, value: any) => {
    try {
        (object[key] as unknown) = value;
    } catch (error) {
        throw new Error(`Unable to set key '${key}' in object.\nObject: ${object}`);
    }
};

export const merge = <T extends Record<string, unknown>>(obj: T, source: Partial<T>) => {
    if (obj === source) {
        return;
    }

    Object.entries(source).forEach(([key, value]) => {
        const objectValue = tryGetValue(obj, key);

        if (value instanceof Object) {
            merge(objectValue as Record<string, unknown>, value);
        } else {
            trySetValue(obj, key, value);
        }
    });
};
