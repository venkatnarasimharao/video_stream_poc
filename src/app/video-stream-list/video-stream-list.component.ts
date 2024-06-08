import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-stream-list',
  templateUrl: './video-stream-list.component.html',
  styleUrls: ['./video-stream-list.component.scss']
})
export class VideoStreamListComponent implements OnInit {
  videoList:any;

  ngOnInit(): void {
      this.videoList = [
        {
          name: 'Asian Blepharoplasty',
          videoUrl: 'https://d3ngc5oa7eval3.cloudfront.net/VIDEO_STEAM_DATA/Agarwal_Advanced/SECTION_I_OCULOPLASTY_AND_ORBIT/Asian_Blepharoplasty/master.mp4'
        },
        {
          name: 'Asian Blepharoplasty',
          videoUrl: 'https://d3ngc5oa7eval3.cloudfront.net/VIDEO_STEAM_DATA/Agarwal_Advanced/SECTION_I_OCULOPLASTY_AND_ORBIT/Asian_Blepharoplasty/master.mp4'
        },
        {
          name: 'Asian Blepharoplasty',
          videoUrl: 'https://d3ngc5oa7eval3.cloudfront.net/VIDEO_STEAM_DATA/Agarwal_Advanced/SECTION_I_OCULOPLASTY_AND_ORBIT/Asian_Blepharoplasty/master.mp4'
        },
        {
          name: 'Asian Blepharoplasty',
          videoUrl: 'https://d3ngc5oa7eval3.cloudfront.net/VIDEO_STEAM_DATA/Agarwal_Advanced/SECTION_I_OCULOPLASTY_AND_ORBIT/Asian_Blepharoplasty/master.mp4'
        },
        {
          name: 'Asian Blepharoplasty',
          videoUrl: 'https://d3ngc5oa7eval3.cloudfront.net/VIDEO_STEAM_DATA/Agarwal_Advanced/SECTION_I_OCULOPLASTY_AND_ORBIT/Asian_Blepharoplasty/master.mp4'
        },
        {
          name: 'Asian Blepharoplasty',
          videoUrl: 'https://d3ngc5oa7eval3.cloudfront.net/VIDEO_STEAM_DATA/Agarwal_Advanced/SECTION_I_OCULOPLASTY_AND_ORBIT/Asian_Blepharoplasty/master.mp4'
        },
        {
          name: 'Asian Blepharoplasty',
          videoUrl: 'https://d3ngc5oa7eval3.cloudfront.net/VIDEO_STEAM_DATA/Agarwal_Advanced/SECTION_I_OCULOPLASTY_AND_ORBIT/Asian_Blepharoplasty/master.mp4'
        },
        {
          name: 'Asian Blepharoplasty',
          videoUrl: 'https://d3ngc5oa7eval3.cloudfront.net/VIDEO_STEAM_DATA/Agarwal_Advanced/SECTION_I_OCULOPLASTY_AND_ORBIT/Asian_Blepharoplasty/master.mp4'
        },
        {
          name: 'Asian Blepharoplasty',
          videoUrl: 'https://d3ngc5oa7eval3.cloudfront.net/VIDEO_STEAM_DATA/Agarwal_Advanced/SECTION_I_OCULOPLASTY_AND_ORBIT/Asian_Blepharoplasty/master.mp4'
        },
        {
          name: 'Asian Blepharoplasty',
          videoUrl: 'https://d3ngc5oa7eval3.cloudfront.net/VIDEO_STEAM_DATA/Agarwal_Advanced/SECTION_I_OCULOPLASTY_AND_ORBIT/Asian_Blepharoplasty/master.mp4'
        },
        {
          name: 'Asian Blepharoplasty',
          videoUrl: 'https://d3ngc5oa7eval3.cloudfront.net/VIDEO_STEAM_DATA/Agarwal_Advanced/SECTION_I_OCULOPLASTY_AND_ORBIT/Asian_Blepharoplasty/master.mp4'
        },
        {
          name: 'Asian Blepharoplasty',
          videoUrl: 'https://d3ngc5oa7eval3.cloudfront.net/VIDEO_STEAM_DATA/Agarwal_Advanced/SECTION_I_OCULOPLASTY_AND_ORBIT/Asian_Blepharoplasty/master.mp4'
        },
      ]
  }
}
