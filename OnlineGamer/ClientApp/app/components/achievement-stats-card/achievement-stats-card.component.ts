import { Component, Input } from '@angular/core';

import { GameAchievement } from '../../models/game-acivement.model';

@Component({
    selector: 'achievement-stats-card',
    templateUrl: './achievement-stats-card.component.html',
    styleUrls: ['./achievement-stats-card.component.css']
})
export class AchievementStatsCardComponent {
    @Input() achievement: GameAchievement;

    constructor() {

    }
}