/**
 *
 * @param {object} settings - Properties passed to the decorator
 * @param {class} target - class constructor of the wrapped class
 *
 */
export const Transform = (settings) => (target) => {
    target.prototype.template = settings.template;
};