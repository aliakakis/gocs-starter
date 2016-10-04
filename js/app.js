import {GameObject} from './dev/gameobject/gameobject';
import {Transform} from './dev/components/transformation/transformation';
import {RenderToDomElement} from './dev/components/renderers/renderToDomElement';
import {EventEmitter} from './lib/EventEmitter/EventEmitter';

@GameObject({
    id: "1"
})
@Transform()
@RenderToDomElement({
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

//console.log(player);

player.transform.transformX();
//player.render.renderToDomElement(player, "#main");
