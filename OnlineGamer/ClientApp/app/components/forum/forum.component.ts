import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../../models/Game';

@Component({
    selector: 'forum',
    templateUrl: './forum.component.html'
})
export class ForumComponent {
    game: Game;

    constructor(private activateRoute: ActivatedRoute) {
        this.game = new Game();
        this.game.id = activateRoute.snapshot.params['gameId'];
        this.game.name = activateRoute.snapshot.params['gameName'];
    }
}