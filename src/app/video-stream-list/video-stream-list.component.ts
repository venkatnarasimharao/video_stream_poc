import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-stream-list',
  templateUrl: './video-stream-list.component.html',
  styleUrls: ['./video-stream-list.component.scss'],
  animations: [
    trigger('changeState', [
      transition(':enter', [
        style({
          top: '50%',
          right: '50%',
          bottom: '50%',
          left: '50%',
          backgroundColor: '#34383c',
        }),
        animate(
          '0.3s ease-out',
          style({
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: '#000000db',
          })
        ),
      ]),
      transition(':leave', [
        style({
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: '#000000db',
        }),
        animate(
          '0.3s ease-in',
          style({
            top: '50%',
            right: '50%',
            bottom: '50%',
            left: '50%',
            backgroundColor: '#34383c',
          })
        ),
      ]),
    ]),
  ],
})
export class VideoStreamListComponent implements OnInit {
  videoList: any;
  showVideoPopup: boolean = false;
  showVideoPopupContainer: boolean = false;
  videoData: any = {};
  // https://d3ngc5oa7eval3.cloudfront.net/VIDEO_STEAM_DATA/Agarwal_Advanced/SECTION_I_OCULOPLASTY_AND_ORBIT/Asian_Blepharoplasty/master.mp4
  
  ngOnInit(): void {
    this.videoList = [
      {
        name: 'Asian Blepharoplasty',
        videoSrc: 'assets/img.jpg',
        videoUrl: 'https://d3ngc5oa7eval3.cloudfront.net/VIDEO_STEAM_DATA/Agarwal_Advanced/SECTION_I_OCULOPLASTY_AND_ORBIT/Asian_Blepharoplasty/master.mp4'
      },
      {
        name: 'Asian Blepharoplasty',
        videoSrc: 'assets/img.jpg',
        videoUrl: 'https://d3ngc5oa7eval3.cloudfront.net/VIDEO_STEAM_DATA/Agarwal_Advanced/SECTION_I_OCULOPLASTY_AND_ORBIT/Asian_Blepharoplasty/master.mp4'
      },
      {
        name: 'Asian Blepharoplasty',
        videoSrc: 'assets/img.jpg',
        videoUrl: 'https://d3ngc5oa7eval3.cloudfront.net/VIDEO_STEAM_DATA/Agarwal_Advanced/SECTION_I_OCULOPLASTY_AND_ORBIT/Asian_Blepharoplasty/master.mp4'
      },
      {
        name: 'Asian Blepharoplasty',
        videoSrc: 'assets/img.jpg',
        videoUrl: 'https://d3ngc5oa7eval3.cloudfront.net/VIDEO_STEAM_DATA/Agarwal_Advanced/SECTION_I_OCULOPLASTY_AND_ORBIT/Asian_Blepharoplasty/master.mp4'
      },
      {
        name: 'Asian Blepharoplasty',
        videoSrc: 'assets/img.jpg',
        videoUrl: 'https://d3ngc5oa7eval3.cloudfront.net/VIDEO_STEAM_DATA/Agarwal_Advanced/SECTION_I_OCULOPLASTY_AND_ORBIT/Asian_Blepharoplasty/master.mp4'
      },
      {
        name: 'Asian Blepharoplasty',
        videoSrc: 'assets/img.jpg',
        videoUrl: 'https://d3ngc5oa7eval3.cloudfront.net/VIDEO_STEAM_DATA/Agarwal_Advanced/SECTION_I_OCULOPLASTY_AND_ORBIT/Asian_Blepharoplasty/master.mp4'
      },
      {
        name: 'Asian Blepharoplasty',
        videoSrc: 'assets/img.jpg',
        videoUrl: 'https://d3ngc5oa7eval3.cloudfront.net/VIDEO_STEAM_DATA/Agarwal_Advanced/SECTION_I_OCULOPLASTY_AND_ORBIT/Asian_Blepharoplasty/master.mp4'
      },
      {
        name: 'Asian Blepharoplasty',
        videoSrc: 'assets/img.jpg',
        videoUrl: 'https://d3ngc5oa7eval3.cloudfront.net/VIDEO_STEAM_DATA/Agarwal_Advanced/SECTION_I_OCULOPLASTY_AND_ORBIT/Asian_Blepharoplasty/master.mp4'
      },
      {
        name: 'Asian Blepharoplasty',
        videoSrc: 'assets/img.jpg',
        videoUrl: 'https://d3ngc5oa7eval3.cloudfront.net/VIDEO_STEAM_DATA/Agarwal_Advanced/SECTION_I_OCULOPLASTY_AND_ORBIT/Asian_Blepharoplasty/master.mp4'
      },
      {
        name: 'Asian Blepharoplasty',
        videoSrc: 'assets/img.jpg',
        videoUrl: 'https://d3ngc5oa7eval3.cloudfront.net/VIDEO_STEAM_DATA/Agarwal_Advanced/SECTION_I_OCULOPLASTY_AND_ORBIT/Asian_Blepharoplasty/master.mp4'
      },
      {
        name: 'Asian Blepharoplasty',
        videoSrc: 'assets/img.jpg',
        videoUrl: 'https://d3ngc5oa7eval3.cloudfront.net/VIDEO_STEAM_DATA/Agarwal_Advanced/SECTION_I_OCULOPLASTY_AND_ORBIT/Asian_Blepharoplasty/master.mp4'
      },
      {
        name: 'Asian Blepharoplasty',
        videoSrc: 'assets/img.jpg',
        videoUrl: 'https://d3ngc5oa7eval3.cloudfront.net/VIDEO_STEAM_DATA/Agarwal_Advanced/SECTION_I_OCULOPLASTY_AND_ORBIT/Asian_Blepharoplasty/master.mp4'
      },
    ]
  }

  endState() {
    this.showVideoPopupContainer = true;
  }

  playVideo(value, data?) {
    if (data) {
      this.videoData = data;
    }
    this.showVideoPopup = value;

  }
  
}
