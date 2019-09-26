import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminMenuComponent } from './components/menu/admin-menu/admin-menu.component';
import { MenuComponent } from './components/menu/menu/menu.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminLoginComponent } from './components/login/admin-login/admin-login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { AdminHeroListComponent } from './components/hero/admin/admin-hero-list/admin-hero-list.component';
import { AdminHeroDetailComponent } from './components/hero/admin/admin-hero-detail/admin-hero-detail.component';
import { ClientHeroDetailComponent } from './components/hero/client/client-hero-detail/client-hero-detail.component';

import { AdminNoiDungListComponent } from './components/noi-dung/admin/admin-noi-dung-list/admin-noi-dung-list.component';
import { AdminNoiDungEditComponent } from './components/noi-dung/admin/admin-noi-dung-detail/admin-noi-dung-edit/admin-noi-dung-edit.component';
import { AdminNoiDungCreateComponent } from "./components/noi-dung/admin/admin-noi-dung-detail/admin-noi-dung-create/AdminNoiDungCreateComponent";
import { DashboardNoiDungMoi } from './components/noi-dung/admin/dashboard-noi-dung-moi/dashboard-noi-dung-moi.component';
import { ClientNoiDungDetail } from './components/noi-dung/client/client-noi-dung-detail/client-noi-dung-detail.component';

import { QuanLyNoiDungPage } from './pages/noi-dung/admin/quan-ly-noi-dung/quan-ly-noi-dung.page';
import { ThemNoiDungPage } from './pages/noi-dung/admin/them-noi-dung/them-noi-dung.page';
import { MenuPage } from './pages/menu/menu.page';
import { SuaNoiDungPage } from './pages/noi-dung/admin/sua-noi-dung/sua-noi-dung.page';

const appRoutes: Routes = [
  {
    // client path
    path: '', component: MenuComponent, children: [
      {
        path: 'noi-dung', children: [
          { path: '', redirectTo: 'noi-dung-detail', pathMatch: 'full' },
          { path: 'noi-dung-detail', component: ClientNoiDungDetail }
        ]
      },
      {
        path: 'hero', children: [
          { path: '', redirectTo: 'hero-detail', pathMatch: 'full' },
          { path: 'hero-detail', component: ClientHeroDetailComponent }
        ]
      }
    ]
  },
  {
    //admin path
    path: 'admin', canActivate: [AuthGuard], children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      { path: 'menu', component: MenuPage },
      {
        path: 'quan-ly-noi-dung', component: QuanLyNoiDungPage, children: [
          { path: '', redirectTo: 'admin-noi-dung-list', pathMatch: 'full' },
          { path: 'admin-noi-dung-list', component: AdminNoiDungListComponent },
          { path: 'admin-tao-moi-noi-dung', component: ThemNoiDungPage },
          { path: 'admin-sua-noi-dung/:id', component: SuaNoiDungPage }
        ]
      },
      // {
      //   path: 'quan-ly-hero', children: [
      //     { path: '', redirectTo: 'admin-hero-list', pathMatch: 'full' },
      //     { path: 'admin-hero-list', component: AdminHeroListComponent },
      //     { path: 'admin-hero-detail', component: AdminHeroDetailComponent }
      //   ]
      // },
      { path: 'dashboard', component: DashboardComponent }
    ]
  },
  {
    path: 'admin/login', component: AdminLoginComponent
  }
  // otherwise redirect to error --- cai nay tao mot page error roi them sau
  //{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}