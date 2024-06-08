import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {MatPaginatorModule} from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { VideoMainContainerComponent } from './video-main-container/video-main-container.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaginationComponent } from './pagination/pagination.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoStreamListComponent } from './video-stream-list/video-stream-list.component';
@NgModule({
    declarations: [
        AppComponent,
        SidemenuComponent,
        VideoMainContainerComponent,
        HeaderComponent,
        FooterComponent,
        PaginationComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        // MatPaginatorModule,
        BrowserAnimationsModule
    ]
})
export class AppModule { }
