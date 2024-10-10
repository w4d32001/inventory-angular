import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { MatIconAnchor, MatIconButton } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretDown, faEllipsisVertical, faSearch } from '@fortawesome/free-solid-svg-icons';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    CommonModule,
    FontAwesomeModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
  ],
  templateUrl: './data-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableComponent<T> {
  @Input() displayedColumns: string[] = [];

  @Input() dataSource = new MatTableDataSource<T>([]);
  @Input() onEdit: (item: T) => void = () => {};
  @Input() onDelete: (item: T) => void = () => {};
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  columnTranslations: { [key: string]: string } = {
    name: 'Nombre',
    age: 'Edad',
    image: 'Imagen',
    description: 'Descripción',
  };
  getTranslatedColumn(column: string): string {
    return this.columnTranslations[column] || column; 
  }

  faSearch = faSearch;
  faEllipsisVertical = faEllipsisVertical
  faCarretDown = faCaretDown
}
