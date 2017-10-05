/**
 *
 * @param props
 * @param target
 * @constructor
 */
export const Transform = (props) => (target) => {
    target.prototype.transform = {
        transformX: () => {
            console.log("Transform X");
        }
    };
    
    return target;
};
