import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: 'home', component: UsersListComponent, title: 'Home' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'users/:userId', component: UserDetailsComponent, title: 'User' },
  { path: '404', component: NotFoundPageComponent, title: 'Not Found' },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
