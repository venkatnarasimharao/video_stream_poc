import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoMainContainerComponent } from './video-main-container/video-main-container.component';

const routes: Routes = [
  {
    path: 'home',
    component: VideoMainContainerComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
