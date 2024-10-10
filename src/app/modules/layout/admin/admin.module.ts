import { ModalComponent } from './../modals/modal/modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { TopbarComponent } from '../components/topbar/topbar.component';
import { FormComponent } from './components/form/form.component';
import { UsersComponent } from './components/users/users.component';
import { UsersFormComponent } from './components/users-form/users-form.component';
import { CotegoriesListComponent } from './components/cotegories-list/cotegories-list.component';
import { CotegoriesFormComponent } from './components/cotegories-form/cotegories-form.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AdminComponent,
    TopbarComponent,
    FormComponent,
    UsersComponent,
    UsersFormComponent,
    CotegoriesListComponent,
    CotegoriesFormComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    // NgSelectModule
  ]
})
export class AdminModule { }
