import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Servico que encapsula o HttpClient do Angular, para tratamentos customizados nas requisições
 */
@Injectable({
  providedIn: 'root'
})
export class HttpWrapperService {
  private baseUrl: string;

  constructor(private http: HttpClient) {}

  setBaseUrl(url: string): void {
    this.baseUrl = url;
  }

  get<T>(url: string, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<T> {
    url = `${this.baseUrl}/${url}`;
    return this.http.get<T>(url, options);
  }

  post<T>(url: string, body: any | null,
    options?: {
      headers?: HttpHeaders | {
        [header: string]: string | string[];
      };
      observe?: 'body';
      params?: HttpParams | {
        [param: string]: string | string[];
      };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }): Observable<T> {
    url = `${this.baseUrl}/${url}`;
    return this.http.post<T>(url, body, options);
  }

  put<T>(url: string, body: any | null,
    options?: {
      headers?: HttpHeaders | {
        [header: string]: string | string[];
      };
      observe?: 'body';
      params?: HttpParams | {
        [param: string]: string | string[];
      };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }): Observable<T> {
    url = `${this.baseUrl}/${url}`;
    return this.http.put<T>(url, body, options);
  }

  delete<T>(url: string,
    options: {
      headers?: HttpHeaders | {
        [header: string]: string | string[];
      };
      observe?: 'body';
      params?: HttpParams | {
        [param: string]: string | string[];
      };
      reportProgress?: boolean;
      responseType: 'arraybuffer';
      withCredentials?: boolean;
    }): Observable<T> {
    url = `${this.baseUrl}/${url}`;
    return this.http.delete<T>(url);
  }

  getQueryParamsFromObj(params: any) {
    return Object.keys(params).filter(key => !!params[key]).map(key => key + '=' + params[key]).join('&');
  }
}
