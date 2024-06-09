import { Component } from '@angular/core';
import { VIDEO_STEAM_DATA } from '../VIDEO_STEAM_DATA';
import { VideostreamService } from '../videostream.service';


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
export class SidenavComponent {
  VIDEO_STREAM_DATA: VideoItem[] = VIDEO_STEAM_DATA;
  expandedKey: string | null = null;

  constructor(private videostreamService: VideostreamService) { }

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
