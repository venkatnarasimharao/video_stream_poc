import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  constructor(private s3Service: S3CommonService) { }


  async ngOnInit() {
    this.videoData = await this.s3Service.getVideoUrl();
    if (sessionStorage.getItem('activeData')) {
      const data = JSON.parse(sessionStorage.getItem('activeData'));
      this.change.emit(data);
    } else {
      const data = {
        value: 'all',
        videoData: this.videoData
      }
      this.change.emit(data);
    }
  }

  saveVideoStream(dataSet: VideoItem | VideoItem[], key:string): void {
    if (key === 'All') {
      const data = {
        value: 'all',
        videoData: dataSet
      }
      sessionStorage.setItem('activeData', JSON.stringify(data));
      this.change.emit(data);
    } else {
      sessionStorage.setItem('activeData', JSON.stringify(dataSet))
      this.change.emit(dataSet);
    }
  }

  toggleExpand(key: string): void {
    if (this.expandedKey === key) {
      this.expandedKey = null;
    } else {
      this.expandedKey = key;
    }
  }
}
