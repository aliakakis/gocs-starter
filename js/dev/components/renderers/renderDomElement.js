/**
 * Render and attach a dom element into an already present dom element
 * @param {object} settings - Properties passed to the decorator
 * @param {class} target - class constructor of the wrapped class
 *
 */
export const RenderDomElement = (settings) => (target) => {
    target.prototype.render = {
        renderDomElement: (() => {
            let el = document.querySelector(settings.attachTo);
            el.insertAdjacentHTML('beforeend', settings.template);
        })()
    };
};