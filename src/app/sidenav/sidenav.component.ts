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
    this.change.emit('all');
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
