/*
 * Place any init app code and routes code here
 *
 */

import {GameObject} from './dev/gameobject/gameobject';
import {Transform} from './dev/components/transformation/transformation';

@GameObject({
    id: "1"
})
@Transform()
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