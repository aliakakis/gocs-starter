/*
 * Place any init app code and routes code here
 *
 */

import {GameObject} from './dev/gameobject/gameobject';
import {Transform} from './dev/components/transformation/transformation';
import {RenderDomElement} from './dev/components/renderers/renderDomElement';

@GameObject({
    id: "1"
})
@Transform()
@RenderDomElement({
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