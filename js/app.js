import {GameObject} from './dev/gameobject/gameobject';
import {Transform} from './dev/components/transformation/transformation';
import {RenderDomElement} from './dev/components/renderers/renderDomElement';
import {EventEmitter} from './lib/EventEmitter/EventEmitter';

@GameObject({
    id: "1"
})
@Transform()
@RenderDomElement({
    selector: "#main", // id or class with # or .
    template: `<div>Hello World!</div>`
})
class Player {
    constructor(settings) {
        this.playerName = settings.playerName;
    }

    hitPoints() {
        console.log("Hit Points");
    }
}

let player = new Player({
    playerName: "John"
});

player.transform.transformX();
//player.render.renderDomElement(document.querySelector("#main"));
