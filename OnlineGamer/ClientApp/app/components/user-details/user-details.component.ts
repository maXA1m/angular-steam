import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { User } from '../../models/user.model';
import { Friend } from '../../models/friend.model';

@Component({
    selector: 'user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
    userId: string;
    user: User;
    friends: Friend[];

    constructor(private activateRoute: ActivatedRoute, http: Http, @Inject('BASE_URL') baseUrl: string) {
        /*  Getting data from route  */
        this.userId = activateRoute.snapshot.params['id'];

        /*  Getting user  */
        http.get(baseUrl + 'api/users/' + this.userId).subscribe(result => {
            this.user = result.json().response.players[0] as User;
        }, error => console.error(error));

        http.get(baseUrl + 'api/users/friends/' + this.userId).subscribe(result => {
            this.friends = result.json().friendslist.friends as Friend[];
        }, error => console.error(error));
    }
}