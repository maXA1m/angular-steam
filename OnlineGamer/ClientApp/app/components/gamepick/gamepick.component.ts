import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../../models/Game';

@Component({
    selector: 'gamepick',
    templateUrl: './gamepick.component.html',
    styleUrls: ['./gamepick.component.css']
})
export class GamepickComponent {
    type: string;
    games: Game[];

    constructor(private activateRoute: ActivatedRoute) {
        this.type = activateRoute.snapshot.params['type'];

        this.games = [
            new Game(730, 'CS : GO', 'csgo'),
            new Game(570, 'DOTA 2', 'dota'),
            new Game(578080, 'PUBG', 'pubg'),
            new Game(271590, 'GTA 5', 'gta')
        ];
    }
}
