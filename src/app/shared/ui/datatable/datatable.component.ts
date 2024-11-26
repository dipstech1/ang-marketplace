import { AfterViewInit, Component, inject, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Column } from './column';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { OverlayModule } from '@angular/cdk/overlay';
import { MenuContextualService } from '../../service/menu-context.service';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSortModule,MatPaginatorModule, OverlayModule,MatIconModule, ReactiveFormsModule],
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

  isOpen = false;
  displayedColumns: Array<string> = [];
  searchTxt:FormControl = new FormControl();
  dataSource: MatTableDataSource<T> = new MatTableDataSource();

  popUpService = inject(MenuContextualService);


  constructor(private viewContainerRef : ViewContainerRef) { }

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

  open(origin:any,menu:any)
  {
    this.popUpService.open(origin,menu,this.viewContainerRef,{data:'I\'m the button '})
    .subscribe(res=>{
      console.log(res)
    })
  }

  searchFilter(){
    console.log(this.searchTxt.value);
    this.popUpService.close('');
    this.searchTxt.setValue('')
  }

}
