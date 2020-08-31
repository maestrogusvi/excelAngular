import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';


@Injectable()
export class AppService {
  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) {

  }

  getTest() {
    const url ="";
    return (this._http.get(url));
  }
}
