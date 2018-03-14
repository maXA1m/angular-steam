import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { GamepickComponent } from './components/gamepick/gamepick.component';
import { NewsComponent } from './components/news/news.component';
import { NewsCardComponent } from './components/newscard/newscard.component';
import { StatsComponent } from './components/stats/stats.component';
import { ForumComponent } from './components/forum/forum.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        GamepickComponent,
        NewsComponent,
        NewsCardComponent,
        StatsComponent,
        ForumComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'news', pathMatch: 'full' },
            { path: ':type', component: GamepickComponent },
            { path: 'news/:gameId/:gameName', component: NewsComponent },
            { path: 'stats/:gameId/:gameName', component: StatsComponent },
            { path: 'forum/:gameId/:gameName', component: ForumComponent },
            { path: '**', redirectTo: 'news' }
        ])
    ]
})
export class AppModuleShared {
}
