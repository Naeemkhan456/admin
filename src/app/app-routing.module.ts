import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'admin', loadChildren: () => import('./modules/layout/admin/admin.module').then(m => m.AdminModule) },
  // { path: 'admin', loadChildren: () => import('./modules/layout/admin/admin.module').then(m => m.AdminModule) },

  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },

  // Add more routes if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
