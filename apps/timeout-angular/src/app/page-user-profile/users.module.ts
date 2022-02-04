import {NgModule} from '@angular/core';
import {UsersComponent} from './users.component';
import {LocalStorageService} from './local-storage.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const MODULES = [
 CommonModule,
 HttpClientModule,
 ReactiveFormsModule,
 RouterModule,
];

@NgModule({
  imports: [MODULES],
  declarations: [UsersComponent], providers: [LocalStorageService]
})
export class UsersModule { }
