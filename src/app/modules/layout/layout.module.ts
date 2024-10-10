import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
// import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ModalComponent } from './modals/modal/modal.component';
// import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    // TopbarComponent,
    SidebarComponent,
    FooterComponent,
    // ModalComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    // NgSelectModule
  ]
})
export class LayoutModule { }
