import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoadingSpinerComponent } from './components/loading-spiner/loading-spiner.component';
import { ErrMessageComponent } from './components/err-message/err-message.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    NavBarComponent,
    UsersListComponent,
    UserDetailsComponent,
    LoadingSpinerComponent,
    ErrMessageComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
