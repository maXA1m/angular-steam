import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';

import { NewspickComponent } from './components/newspick/newspick.component';
import { NewsComponent } from './components/news/news.component';
import { NewsCardComponent } from './components/news-card/news-card.component';

import { AchievementspickComponent } from './components/achievementspick/achievementspick.component';
import { AchievementsStatsComponent } from './components/achievements-stats/achievements-stats.component';
import { AchievementsListComponent } from './components/achievements-list/achievements-list.component';
import { AchievementStatsCardComponent } from './components/achievement-stats-card/achievement-stats-card.component';
import { AchievementListCardComponent } from './components/achievement-list-card/achievement-list-card.component';

import { UserpickComponent } from './components/userpick/userpick.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

import { SearchComponent } from './components/search/search.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,

        NewspickComponent,
        NewsComponent,
        NewsCardComponent,

        AchievementspickComponent,
        AchievementsStatsComponent,
        AchievementsListComponent,
        AchievementStatsCardComponent,
        AchievementListCardComponent,

        UserpickComponent,
        UserDetailsComponent,

        SearchComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'search', pathMatch: 'full' },
        
            { path: 'news', component: NewspickComponent },
            { path: 'news/:gameId', component: NewsComponent },

            { path: 'achievements', component: AchievementspickComponent },
            { path: 'achievements/list/:gameId', component: AchievementsListComponent },
            { path: 'achievements/stats/:gameId', component: AchievementsStatsComponent },

            { path: 'user', component: UserpickComponent },
            { path: 'user/:id', component: UserDetailsComponent },

            { path: 'search', component: SearchComponent },

            { path: '**', redirectTo: 'search' }
        ])
    ]
})
export class AppModuleShared {
}
