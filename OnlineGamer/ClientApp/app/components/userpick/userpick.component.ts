import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'userpick',
    templateUrl: './userpick.component.html',
    styleUrls: ['./userpick.component.css']
})
export class UserpickComponent {
    userId: string;

    constructor(private router: Router) {

    }

    onEnter(userId: string) {
        if(userId)
            this.userId = userId;

        if (this.userId)
            this.router.navigate(['/user/' + this.userId]);
    }
}
