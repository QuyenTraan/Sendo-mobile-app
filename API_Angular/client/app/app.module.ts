import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AdminMenuComponent } from './components/menu/admin-menu/admin-menu.component';
import { MenuComponent } from './components/menu/menu/menu.component';
import { AdminLoginComponent } from './components/login/admin-login/admin-login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { ManageStateService } from './shared/manage-state.service';
import { CookieService } from 'angular2-cookie/core';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './guards/auth.guard';

import { QuanLyNoiDungPage } from './pages/noi-dung/admin/quan-ly-noi-dung/quan-ly-noi-dung.page';
import { ThemNoiDungPage } from './pages/noi-dung/admin/them-noi-dung/them-noi-dung.page';
import { SuaNoiDungPage } from './pages/noi-dung/admin/sua-noi-dung/sua-noi-dung.page';
import { MenuPage } from './pages/menu/menu.page';

//feature module
import { NoiDungModule } from './components/noi-dung/noi-dung.module';
import { HeroModule } from './components/hero/hero.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    NoiDungModule,
    HeroModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminMenuComponent,
    MenuComponent,
    AdminLoginComponent,
    DashboardComponent,
    QuanLyNoiDungPage,
    ThemNoiDungPage,
    MenuPage,
    SuaNoiDungPage
  ],
  providers: [
    ManageStateService,
    CookieService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
