import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { VIDEO_STEAM_DATA } from '../VIDEO_STEAM_DATA';
import { VideostreamService } from '../videostream.service';
import { S3CommonService } from '../s3.common.service';


interface VideoItem {
  key: string;
  path: string;
  items: VideoItem[];
}


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  videoData: VideoItem[];
  expandedKey: string | null = null;
  @Output() change = new EventEmitter();

  constructor(private videostreamService: VideostreamService, private s3Service: S3CommonService) { }


  async ngOnInit() {
    this.videoData = await this.s3Service.getVideoUrl();
  }

  saveVideoStream(dataSet: VideoItem | VideoItem[], key:string): void {
    this.change.emit(dataSet);
  }

  toggleExpand(key: string): void {
    if (this.expandedKey === key) {
      this.expandedKey = null;
    } else {
      this.expandedKey = key;
    }
  }
}
