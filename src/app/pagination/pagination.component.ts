import { Component, EventEmitter, Input, Output } from '@angular/core';
// import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  // currentPage = 0;

  // handlePageEvent(pageEvent: PageEvent){
  //   this.currentPage = pageEvent.pageIndex;
  //   console.log(this.currentPage);
  // }
  @Input() currentPage:number;
  @Input() totalItems:number;
  @Input() itemsPerPage: number;
  @Output() onClick: EventEmitter<number> = new EventEmitter();
  totalPages:number = 0;
  pages:number[] = [];

  constructor() {}

  ngOnInit(): void {
    if(this.totalItems){
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      this.pages = Array.from({length: this.totalPages}, (_, i) => i + 1);
    }
  }

  pageClicked(page: number) {
    if (page > this.totalPages) return;
    this.onClick.emit(page);
  }
}