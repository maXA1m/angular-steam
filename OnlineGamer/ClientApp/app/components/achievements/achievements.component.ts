import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { Game } from '../../models/Game';
import { GameAchievement } from '../../models/GameAchievement';

@Component({
    selector: 'achievements',
    templateUrl: './achievements.component.html',
    styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent {
    game: Game;
    achievements: GameAchievement[];

    constructor(private activateRoute: ActivatedRoute, http: Http, @Inject('BASE_URL') baseUrl: string) {
        /*  Getting data from route  */
        this.game = new Game();
        this.game.id = activateRoute.snapshot.params['gameId'];
        this.game.name = activateRoute.snapshot.params['gameName'];

        /*  Getting news for game  */
        http.get(baseUrl + 'api/achievements/' + this.game.id).subscribe(result => {
            this.achievements = result.json().achievementpercentages.achievements as GameAchievement[];
        }, error => console.error(error));
    }
}
