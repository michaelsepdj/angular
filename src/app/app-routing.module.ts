
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PcsComponent} from './pcs/pcs.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { PcDetailComponent }  from './pc-detail/pc-detail.component';

const routes: Routes =  [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'pcs',component: PcsComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: PcDetailComponent },
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports: [ RouterModule]
  
})
export class AppRoutingModule { }
