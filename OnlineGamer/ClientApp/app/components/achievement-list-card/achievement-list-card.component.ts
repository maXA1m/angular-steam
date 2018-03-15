import { Component, Input } from '@angular/core';

import { GameAchievementDetails } from '../../models/game-achievement-details.model';

@Component({
    selector: 'achievement-list-card',
    templateUrl: './achievement-list-card.component.html',
    styleUrls: ['./achievement-list-card.component.css']
})
export class AchievementListCardComponent {
    @Input() achievement: GameAchievementDetails;

    constructor() {

    }
}