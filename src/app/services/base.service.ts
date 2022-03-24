import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export abstract class BaseService {
  private baseUrl = environment.apiBaseUrl;  
  constructor(protected http: HttpClient) {}

  protected getResource<T>(fullUrl: string, headers: HttpHeaders = new HttpHeaders(), params?): Observable<any> {
    return this.http.get<T>(fullUrl, { headers: headers, params: params })
      .map((json: T) => json)
      .catch((err: any) => { throw err });
  }
  protected getBaseUrl() {
    return this.baseUrl;
  }
  protected getGraphQLBaseUrl() {
    return this.baseUrl + '/graphql';
  }
}
