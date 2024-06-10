import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnChanges {
  @Input() currentPage: number = 1;
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 5;
  @Output() onClick: EventEmitter<number> = new EventEmitter<number>();

  totalPages: number = 0;
  visiblePages: number[] = []; // Array to store visible page numbers

  constructor() { }

  ngOnChanges(): void {
    if (this.totalItems) {
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      this.updateVisiblePages(this.currentPage);
    }
  }

  updateVisiblePages(pageNumber: number): void {
    const visiblePageCount = 4;
    const halfVisibleCount = Math.floor(visiblePageCount / 2);

    let startIndex = Math.max(Math.min(pageNumber - halfVisibleCount, this.totalPages - visiblePageCount + 1), 1);
    let endIndex = Math.min(startIndex + visiblePageCount - 1, this.totalPages);

    if (startIndex === 1) {
      endIndex = Math.min(endIndex + halfVisibleCount, this.totalPages);
    } else if (endIndex === this.totalPages) {
      startIndex = Math.max(startIndex - halfVisibleCount, 1);
    }

    this.visiblePages = Array.from({ length: endIndex - startIndex + 1 }, (_, i) => startIndex + i);
  }

  pageClicked(page: number, type?: any): void {
    if (type === 'begin' && this.currentPage === 1) {
      return;
    }
    if (type === 'end' && this.currentPage === this.totalPages) {
      return;
    }
    if (page > this.totalPages) return;
    this.onClick.emit(page);
    this.updateVisiblePages(page);
    console.log(this.visiblePages)
  }
}