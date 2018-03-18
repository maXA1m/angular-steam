import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {
    gameId: string;
    searchType: string;

    constructor(private router: Router) {
        this.searchType = "achievements/list";
    }

    onEnter(gameId: string) {
        if (gameId)
            this.gameId = gameId;

        if(this.gameId && this.searchType)
            this.router.navigate(['/' + this.searchType + '/' + this.gameId]);
    }

    onChange(searchType: string) {
        if (searchType)
            this.searchType = searchType;
    }
}
