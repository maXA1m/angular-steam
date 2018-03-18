import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { User } from '../../models/user.model';
import { Friend } from '../../models/friend.model';
import { OwnedGame } from '../../models/owned-game.model';

@Component({
    selector: 'user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
    userId: string;
    user: User;

    friends: Friend[];

    games: OwnedGame[];
    gameCount: number;

    gamesActive: boolean;
    friendsActive: boolean;

    constructor(private activateRoute: ActivatedRoute, http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.friendsActive = true;
        this.gamesActive = false;

        this.gameCount = 0;

        /*  Getting data from route  */
        this.userId = activateRoute.snapshot.params['id'];

        /*  Getting user  */
        http.get(baseUrl + 'api/users/' + this.userId).subscribe(result => {
            const json = result.json();

            if (json.response.players != null)
                this.user = json.response.players[0] as User;
        }, error => console.error(error));

        http.get(baseUrl + 'api/users/friends/' + this.userId).subscribe(result => {
            const json = result.json();

            if (json.friendslist.friends != null)
                this.friends = json.friendslist.friends as Friend[];
        }, error => console.error(error));

        http.get(baseUrl + 'api/users/games/' + this.userId).subscribe(result => {
            const json = result.json();

            if (json.response.games != null)
                this.games = json.response.games as OwnedGame[];

            if (json.response.game_count != null)
                this.gameCount = json.response.game_count as number;
        }, error => console.error(error));
    }

    showFriends() {
        this.friendsActive = true;
        this.gamesActive = false;
    }

    showGames() {
        this.friendsActive = false;
        this.gamesActive = true;
    }
}