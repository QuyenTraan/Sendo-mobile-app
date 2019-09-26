import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { AdminHeroDetailComponent } from './admin/admin-hero-detail/admin-hero-detail.component';
import { AdminHeroListComponent } from './admin/admin-hero-list/admin-hero-list.component';
import { ClientHeroDetailComponent } from './client/client-hero-detail/client-hero-detail.component';
import { DashboardHeroComponent } from './admin/dashboard-hero/dashboard-hero.component';

@NgModule({
    imports: [SharedModule],
    declarations: [
        AdminHeroDetailComponent,
        AdminHeroListComponent,
        ClientHeroDetailComponent,
        DashboardHeroComponent
    ],
    exports: [
        DashboardHeroComponent,
        AdminHeroDetailComponent,
        AdminHeroListComponent,
        ClientHeroDetailComponent
    ]
})
export class HeroModule {

}