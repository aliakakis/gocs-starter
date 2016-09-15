/**
 * GameObject is the main entity for creating in game assets
 * They are composed of components which are being added using decorators
 * @param settings
 * @param target
 * @constructor
 */
export const GameObject = (settings) => (target) => {
    target.prototype.id = settings.id;
};

