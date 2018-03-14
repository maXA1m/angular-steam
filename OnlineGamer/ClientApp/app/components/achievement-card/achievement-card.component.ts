import { Component, Input } from '@angular/core';

import { GameAchievement } from '../../models/GameAchievement';

@Component({
    selector: 'achievement-card',
    templateUrl: './achievement-card.component.html',
    styleUrls: ['./achievement-card.component.css']
})
export class AchievementCardComponent {
    @Input() achievement: GameAchievement;

    constructor() {

    }
}