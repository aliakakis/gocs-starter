/**
 * Render and attach a dom element into an already present dom element
 * @param {object} props - Properties passed to the decorator
 * @param {class} target - class constructor of the wrapped class
 *
 */
export const RenderToDomElement = (props) => (target) => {
    target.prototype.render = {
        renderToDomElement: (() => {
            let el = document.querySelector(props.selector);
            el.insertAdjacentHTML('beforeend', props.template);
        })()
    };
};