import { LayoutsComponent } from './layouts.component';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { BookManagementComponent } from './../modules/book-management/book-management.component';
import { UserManagementComponent } from './../modules/user-management/user-management.component';
import { AdminManagementComponent } from './../modules/admin-management/admin-management.component';
import { HomeComponent } from './../modules/home/home.component';
import { PostManagementComponent } from './../modules/post-management/post-management.component';
import { BrikManagementComponent } from './../modules/brik-management/brik-management.component';
import { MessagesComponent } from './../modules/messages/messages.component';
import { ListComponent } from './../modules/list/list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LayoutsComponent,
    HomeComponent,
    AdminManagementComponent,
    UserManagementComponent,
    BookManagementComponent,
    PostManagementComponent,
    BrikManagementComponent,
    MessagesComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class LayoutsModule { }
