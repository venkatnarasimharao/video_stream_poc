import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoStreamListComponent } from './video-stream-list/video-stream-list.component';

const routes: Routes = [
  {
    path: '',
    component: VideoStreamListComponent,
    // canActivate: [AuthGuard]
  },
  // {
  //   path: '**',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
