import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-video-popup',
  templateUrl: './video-popup.component.html',
  styleUrls: ['./video-popup.component.scss']
})
export class VideoPopupComponent implements OnInit, OnChanges {

  @Output() closePopup = new EventEmitter();
  @Input() videoSrc: any = 'https://d3ngc5oa7eval3.cloudfront.net/VIDEO_STEAM_DATAhttps://d3ngc5oa7eval3.cloudfront.net/VIDEO_STEAM_DATA/Agarwal_Advanced/SECTION_I_OCULOPLASTY_AND_ORBIT/Asian_Blepharoplasty/master.mp4';
  @Input() heading: any = 'Videos';

  ngOnInit(): void {
    document.body.addEventListener('keydown', (e)=> {
      if (e.key == "Escape") {
        this.closePopup.emit(false);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(this.videoSrc, 'check this out')
  }

  closeModal($event?) {
    if ($event) {
      if (!document.getElementsByClassName('video-popup-sub-container')[0]?.contains($event.target)) {
        this.closePopup.emit(false);
      }
    } else {
      this.closePopup.emit(false);
    }
  }

}
