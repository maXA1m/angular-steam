import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { Game } from '../../models/game.model';
import { GameAchievement } from '../../models/game-acivement.model';

@Component({
    selector: 'achievements-stats',
    templateUrl: './achievements-stats.component.html',
    styleUrls: ['./achievements-stats.component.css']
})
export class AchievementsStatsComponent {
    game: Game;
    achievements: GameAchievement[];
    loading: boolean;

    constructor(private activateRoute: ActivatedRoute, http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.loading = true;

        /*  Getting data from route  */
        this.game = new Game();
        this.game.id = activateRoute.snapshot.params['gameId'];

        /*  Getting news for game  */
        http.get(baseUrl + 'api/achievements/' + this.game.id).subscribe(result => {
            const json = result.json();
            if (json.achievementpercentages != null && json.achievementpercentages.achievements != null)
                this.achievements = json.achievementpercentages.achievements as GameAchievement[];

            this.loading = false;
        }, error => { console.error(error); this.loading = false; });
    }
}
