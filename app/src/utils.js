export const debug = (value, callback) => {
    console.log(`=== Debug: ${value}`);
    !!callback && callback(value);
};
