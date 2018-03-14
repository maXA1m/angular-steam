import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../../models/Game';
import { GameNews } from '../../models/GameNews';
import { Http } from '@angular/http';

@Component({
    selector: 'news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
})
export class NewsComponent {
    game: Game;
    news: GameNews[];

    constructor(private activateRoute: ActivatedRoute, http: Http, @Inject('BASE_URL') baseUrl: string) {
        /*  Getting data from route  */
        this.game = new Game();
        this.game.id = activateRoute.snapshot.params['gameId'];
        this.game.name = activateRoute.snapshot.params['gameName'];

        /*  Getting news for game  */
        http.get(baseUrl + 'api/news/' + this.game.id).subscribe(result => {
            this.news = result.json().appnews.newsitems as GameNews[];
        }, error => console.error(error));
    }
}
