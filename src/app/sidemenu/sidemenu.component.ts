import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
 
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit{
@Input() videoData:any =[];
@Output() notify: EventEmitter<any> = new EventEmitter<any>();
ngOnInit(): void {
  console.log('Inside SidemenuComponent----------------------->',this.videoData);
 
}
navigateImg(obj: any){
  console.log('navigateImg method called------------->',obj);
  this.notify.emit(obj)
}
}