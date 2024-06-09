import { Component, OnInit } from '@angular/core';
import { VIDEO_STEAM_DATA } from '../VIDEO_STEAM_DATA';
import { VideostreamService } from '../videostream.service';

interface VideoItem {
  key: string;
  path: string;
  items: VideoItem[];
}

@Component({
  selector: 'app-video-stream-list',
  templateUrl: './video-stream-list.component.html',
  styleUrls: ['./video-stream-list.component.scss']
})
export class VideoStreamListComponent implements OnInit {
  VIDEO_STREAM_DATA: VideoItem[] = VIDEO_STEAM_DATA;
  expandedKey: string | null = null;

  constructor(private videostreamService: VideostreamService) { }

  ngOnInit(): void {
    console.log('VIDEO_STREAM_DATA::', this.VIDEO_STREAM_DATA);
  }

  saveVideoStream(dataSet: VideoItem | VideoItem[], key:string): void {
    console.log('saveVideoStream method with::', dataSet, ' key:',key);
    this.videostreamService.saveCurrVideoItemArr(dataSet);
  }

  hasSubItems(obj: VideoItem): boolean {
    console.log('hasSubItems::',obj);
    return obj.items && obj.items.length > 0;
  }

  toggleExpand(key: string): void {
    console.log('toggleExpand::::::::::::',key);
    
    if (this.expandedKey === key) {
      this.expandedKey = null;
    } else {
      this.expandedKey = key;
    }
  }
}