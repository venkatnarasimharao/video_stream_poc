import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { VideoMainContainerComponent } from './video-main-container/video-main-container.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VideoStreamListComponent } from './video-stream-list/video-stream-list.component';
import { ReplaceUnderscorePipe } from './replace-underscore.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    VideoMainContainerComponent,
    HeaderComponent,
    FooterComponent,
    VideoStreamListComponent,
    ReplaceUnderscorePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
