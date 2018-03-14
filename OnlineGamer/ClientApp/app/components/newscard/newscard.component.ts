import { Component, Input } from '@angular/core';
import { GameNews } from '../../models/GameNews';

@Component({
    selector: 'newscard',
    templateUrl: './newscard.component.html',
    styleUrls: ['./newscard.component.css']
})
export class NewsCardComponent {
    @Input() gamenew: GameNews;

    constructor() {

    }
}
