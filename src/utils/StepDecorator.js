/* use this to add more meaningful steps to your functions
 you can pass parameters that you pass into functions
 to add that data into the step explanation*/
export default function step(nameFn) {
    return (target, property, descriptor) => {
        const original = descriptor.value;
        if (typeof original === 'function') {
            descriptor.value = function(...args) {
                try {
                    const stepDescription = typeof nameFn === 'function' ? nameFn.apply(this, args) : nameFn;
                    reporter.createStep(stepDescription);
                } catch (e) {
                    // eslint-disable-next-line no-console
                    console.error(`[ERROR] Failed to decorate ${target.constructor.name}.${property}: ${e}`);
                }
                return original.apply(this, args);
            };
        }
        return descriptor;
    };
}
