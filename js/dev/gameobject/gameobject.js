/**
 * GameObject is the main entity for creating in game assets
 * They are composed of components which are being added using decorators
 * @param props
 * @param target
 * @constructor
 */
export const GameObject = (props) => (target) => {
    target.prototype.id = props.id;
    
    return target;
};

