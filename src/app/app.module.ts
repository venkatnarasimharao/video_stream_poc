import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaginationComponent } from './pagination/pagination.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoPopupComponent } from './video-popup/video-popup.component';
import { S3CommonService } from './s3.common.service';
import { VideoStreamListComponent } from './video-stream-list/video-stream-list.component';
import { ReplaceUnderscorePipe } from './replace-underscore.pipe';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PaginationComponent,
    VideoPopupComponent,
    VideoStreamListComponent,
    ReplaceUnderscorePipe,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [S3CommonService],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
