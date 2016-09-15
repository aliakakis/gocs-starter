/**
 *
 * @param settings
 * @param target
 * @constructor
 */
export const Transform = (settings) => (target) => {
    target.prototype.transform = {
        transformX: () => {
            console.log("Transform X");
        }
    };
};