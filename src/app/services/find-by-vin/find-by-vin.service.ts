import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FindByVinService {

  private baseURL: string = environment.apiVin.base;

  private api_key = environment.apiVin.api_key;
  constructor( private http: HttpClient ) { }

  public findVin = ( vin: string ): Observable<any> => {
    const params = new HttpParams()
    .append('vin', vin)
    .append('api_key', this.api_key );

    const headers = new HttpHeaders()
    .append('Accept', '*/*')
    try {
      return this.http.get( this.baseURL + environment.apiVin.paths.VinFind, { params: params, headers: headers } );
    } catch (error: any) {
      return error
    }
  }

  public TreeFullGet = ( ssd: string, lang: string, link: string ): Observable<any> => {
    const params = new HttpParams()
    .append('ssd', ssd)
    .append('lang', lang)
    .append('link', link)
    .append('api_key', this.api_key );

    const headers = new HttpHeaders()
    .append('Accept', '*/*')

    try {
      return this.http.get( this.baseURL + environment.apiVin.paths.TreeFullGet, { params: params, headers: headers } );
    } catch (error: any) {
      return error
    }
  }

  public TreeNodePartsGet = ( ssd: string, lang: string, link: string, group: string ): Observable<any> => {
    const params = new HttpParams()
    .append('ssd', ssd)
    .append('lang', lang)
    .append('link', link)
    .append('group', group)
    .append('api_key', this.api_key );

    const headers = new HttpHeaders()
    .append('Accept', '*/*')

    try {
      return this.http.get( this.baseURL + environment.apiVin.paths.TreeNodePartsGet, { params: params, headers: headers } );
    } catch (error: any) {
      return error
    }
  }
}
