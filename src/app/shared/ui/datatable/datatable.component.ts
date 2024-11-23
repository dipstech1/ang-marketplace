import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Column } from './column';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSortModule,MatPaginatorModule],
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent<T> implements OnInit,AfterViewInit  {
  @Input()
  tableColumns: Array<Column> = [];

  @Input()
  tableData: Array<T> = [];

  @ViewChild(MatSort) sort!: MatSort | null;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  displayedColumns: Array<string> = [];
  dataSource: MatTableDataSource<T> = new MatTableDataSource();

  constructor() { }

  ngOnInit(): void {    
    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  sortData(sort:Sort){
    console.log(sort);
    
  }

}
