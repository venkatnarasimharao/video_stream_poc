import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit, OnChanges {
 
  @Input() videoData: any = [];
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(): void {
    console.log('Inside SidemenuComponent----------------------->', this.videoData);
  }
  ngOnChanges() {
    this.notify.emit(this.videoData[0]);
  }
  
  navigateImg(obj: any) {
    console.log('navigateImg method called------------->', obj);
    this.notify.emit(obj)
  }
}