import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { UserManagementComponent } from './modules/user-management/user-management.component';
import { PostManagementComponent } from './modules/post-management/post-management.component';
import { MessagesComponent } from './modules/messages/messages.component';
import { ListComponent } from './modules/list/list.component';
import { BrikManagementComponent } from './modules/brik-management/brik-management.component';
import { BookManagementComponent } from './modules/book-management/book-management.component';
import { AdminManagementComponent } from './modules/admin-management/admin-management.component';
import { HomeComponent } from './modules/home/home.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [{
      path: '',
      component: HomeComponent
    }, {
      path: 'admin-management',
      component: AdminManagementComponent
    }, {
      path: 'book-management',
      component: BookManagementComponent
    }, {
      path: 'brik-management',
      component: BrikManagementComponent
    }, {
      path: 'list',
      component: ListComponent
    }, {
      path: 'messages',
      component: MessagesComponent
    }, {
      path: 'post-management',
      component: PostManagementComponent
    }, {
      path: 'user-management',
      component: UserManagementComponent
    }
  ]
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
