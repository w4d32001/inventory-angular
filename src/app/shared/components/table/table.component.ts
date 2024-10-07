import { Component } from '@angular/core';
import { data } from './table.data';
import { CommonModule } from '@angular/common';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  templateUrl: './table.component.html',
})
export class TableComponent {
  columns: string[] = ['id', 'name', 'category'];
  data: any[] = data;

  currentPage: number = 0;
  pageSize: number = 5;

  get paginationData() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.data.slice(startIndex, endIndex);
  }

  get totalPages(){
    return Math.ceil(this.data.length / this.pageSize);
  }

  nextPage(){
    if(this.currentPage < this.totalPages - 1){
      this.currentPage++;
     }
  }
  prevPage(){                             
    if(this.currentPage > 0){
       this.currentPage--;
     }
  }

  onPageSizeChange() {
    this.currentPage = 0;
  }

  faChevronRight = faChevronRight
  faChevronLeft = faChevronLeft

}
