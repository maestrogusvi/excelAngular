import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';


@Injectable()
export class AppService {
  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) {

  }

  getTest() {
    return (this._http.get('http://api.jsoneditoronline.org/v1/docs/b6c9eb52c64746829ec652d655b10c8c/data'));
  }
}
