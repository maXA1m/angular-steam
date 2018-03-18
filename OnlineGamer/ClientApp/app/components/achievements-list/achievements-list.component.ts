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
    loading: boolean;

    constructor(private activateRoute: ActivatedRoute, http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.loading = true;

        /*  Getting data from route  */
        this.game = new Game();
        this.game.id = activateRoute.snapshot.params['gameId'];
        this.game.name = "GAME " + this.game.id;

        /*  Getting news for game  */
        http.get(baseUrl + 'api/achievements/details/' + this.game.id).subscribe(result => {
            const json = result.json();

            if (json.game.availableGameStats != null && json.game.availableGameStats.achievements != null)
                this.achievements = json.game.availableGameStats.achievements as GameAchievementDetails[];

            if (json.game != null && json.game.gameName)
                this.game.name = json.game.gameName as string;

            this.loading = false;
        }, error => { console.error(error); this.loading = false; });
    }
}
