import {NgModule} from '@angular/core';
import {UsersComponent} from './users.component';
import {LocalStorageService} from './local-storage.service';
import {FormInputReactiveModule} from '../form-input-reactive/form-input-reactive.module';

export const MODULES = [
//  CommonModule,
//  HttpClientModule,
//  FormsModule,
//  ReactiveFormsModule,
//  RouterModule,
];

@NgModule({
  imports: [MODULES, FormInputReactiveModule],
  declarations: [UsersComponent], providers: [LocalStorageService]
})
export class UsersModule { }
