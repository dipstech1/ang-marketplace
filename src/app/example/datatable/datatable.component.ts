import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Column } from 'src/app/shared/ui/datatable/column';

import {DatatableComponent as Table} from '../../shared/ui/datatable/datatable.component'
import { ButtonComponent } from "../../shared/ui/button/button.component";

export interface Element {
  position: number,
  name: string,
  weight: number,
  symbol: string
}

@Component({
  selector: 'app-examlple-datatable',
  standalone: true,
  imports: [Table],
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent {
  @ViewChild('dyData', { static: true, read:TemplateRef }) dyData!:TemplateRef<any>;
  @ViewChild('edit', { static: true, read:TemplateRef }) edit!:TemplateRef<any>;

  tableColumns: Array<Column> = [];

  tableData: Array<Element> = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
  ];

  ngOnInit(){    
    this.tableColumns = [
      {
        columnDef: 'position',
        header: 'Position',
        cell: (element: Record<string, any>) => `${element['position']}`,
        sort : true,
        filter:{canFilter:true,filterId : 'position'}
      },
      {
        columnDef: 'name',
        header: 'Name',
        cell: (element: Record<string, any>) => `${element['name']}`,
        isLink: false,
        url: 'abc',
        sort : false,
        filter:{canFilter:false,filterId : ''}
      },
      {
        columnDef: 'weight',
        header: 'Weight',
        cell: (element: Record<string, any>) => `${element['weight']}`,
        sort : true,
        filter:{canFilter:true,filterId : 'weight'}
      },
      {
        columnDef: 'symbol',
        header: 'Symbol',
        cell: (element: Record<string, any>) => `${element['symbol']}`,
        template: this.dyData,
        sort : true,
        filter:{canFilter:true,filterId : 'symbol'}
      }
    ]
  }

  editData(data:any){
    console.log("EDIT ", data);
    
  }
}
