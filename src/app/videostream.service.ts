import { Injectable } from '@angular/core';

interface VideoItem {
  [key: string]: {
    name: string;
    items: VideoItem[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class VideostreamService {
  currVideoItemArr:VideoItem[]=[];
  constructor() { }
  saveCurrVideoItemArr(data){
    this.currVideoItemArr = data;
  }
  findCurrVideoItemArr(){
    return this.currVideoItemArr
  }
}
