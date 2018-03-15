import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../../models/game.model';

@Component({
    selector: 'achievementspick',
    templateUrl: './achievementspick.component.html',
    styleUrls: ['./achievementspick.component.css']
})
export class AchievementspickComponent {
    games: Game[];

    constructor() {
        this.games = [
            new Game(730, 'CS : GO', 'csgo'),
            new Game(570, 'DOTA 2', 'dota'),
            new Game(578080, 'PUBG', 'pubg'),
            new Game(271590, 'GTA 5', 'gta')
        ];
    }
}
