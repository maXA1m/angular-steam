import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../../models/Game';

@Component({
    selector: 'stats',
    templateUrl: './stats.component.html'
})
export class StatsComponent {
    game: Game;

    constructor(private activateRoute: ActivatedRoute) {
        this.game = new Game();
        this.game.id = activateRoute.snapshot.params['gameId'];
        this.game.name = activateRoute.snapshot.params['gameName'];
    }
}
