import { Component, Input } from '@angular/core';
import { GameNews } from '../../models/GameNews';

@Component({
    selector: 'news-card',
    templateUrl: './news-card.component.html',
    styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent {
    @Input() gamenew: GameNews;

    constructor() {

    }
}
