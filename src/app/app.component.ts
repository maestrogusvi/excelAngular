import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import {AppService} from './services/app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  title = 'vmware';
  wordFilter = 'Location';
  public jsonFilter: Array<object> = [];
  // tslint:disable-next-line:variable-name
  constructor(private _appService: AppService) {
  }


  exportExcelFromJson(jsonData): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'MyExcel.xlsx');
  }

  testClick() {
    const json = '[{\n' +
      '        "id": 1163,\n' +
      '        "accountType": 1,\n' +
      '        "optionRuleId": "Countries",\n' +
      '        "operator": "like",\n' +
      '        "value": "united"\n' +
      '    }' +
     ' ,{\n' +
    '        "id": 1163,\n' +
    '        "accountType": 1,\n' +
    '        "optionRuleId": "Countries",\n' +
    '        "operator": "like",\n' +
    '        "value": "united"\n' +
    '    }]';
    this.exportExcelFromJson(JSON.parse(json));
  }

  public getTestFromUrl() {
    this._appService.getTest().subscribe(
      result => this.exportExcelFromJson(result),
      error => {

      }
    );
  }

}



