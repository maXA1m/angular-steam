import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { Game } from '../../models/game.model';
import { GameNews } from '../../models/game-news.model';

@Component({
    selector: 'news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
})
export class NewsComponent {
    game: Game;
    news: GameNews[];
    count: number;
    loading: boolean;

    constructor(private activateRoute: ActivatedRoute, http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.loading = true;

        /*  Getting data from route  */
        this.game = new Game();
        this.game.id = activateRoute.snapshot.params['gameId'];

        /*  Getting news for game  */
        http.get(baseUrl + 'api/news/' + this.game.id).subscribe(result => {
            const json = result.json();

            if (json.appnews.newsitems)
                this.news = json.appnews.newsitems as GameNews[];

            if (json.appnews.count)
                this.count = json.appnews.count as number;

            this.loading = false;
        }, error => { console.error(error); this.loading = false; });
    }
}
