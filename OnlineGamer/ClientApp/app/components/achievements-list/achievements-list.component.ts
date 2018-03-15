import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { Game } from '../../models/game.model';
import { GameAchievementDetails } from '../../models/game-achievement-details.model';

@Component({
    selector: 'achievements-list',
    templateUrl: './achievements-list.component.html',
    styleUrls: ['./achievements-list.component.css']
})
export class AchievementsListComponent {
    game: Game;
    achievements: GameAchievementDetails[];

    constructor(private activateRoute: ActivatedRoute, http: Http, @Inject('BASE_URL') baseUrl: string) {
        /*  Getting data from route  */
        this.game = new Game();
        this.game.id = activateRoute.snapshot.params['gameId'];
        this.game.name = activateRoute.snapshot.params['gameName'];

        /*  Getting news for game  */
        http.get(baseUrl + 'api/achievements/details/' + this.game.id).subscribe(result => {
            this.achievements = result.json().game.availableGameStats.achievements as GameAchievementDetails[];
        }, error => console.error(error));
    }
}
