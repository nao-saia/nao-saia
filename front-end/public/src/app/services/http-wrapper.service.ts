import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/**
 * Servico que encapsula o HttpClient do Angular, para tratamentos customizados nas requisições
 */
@Injectable({
  providedIn: 'root'
})
export class HttpWrapperService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  get(url: string, 
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
      }): Observable<Object> {
        url = `${this.baseUrl}/${url}`;
    return this.http.get(url, options);
  }

  post(url: string, body: any | null, 
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
      }): Observable<Object> {
        url = `${this.baseUrl}/${url}`;
    return this.http.post(url, body, options);
  }

  put(url: string, body: any | null, 
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
      }): Observable<Object> {
        url = `${this.baseUrl}/${url}`;
    return this.http.put(url, body, options);
  }

  delete(url: string, 
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
         }): Observable<Object> {
          url = `${this.baseUrl}/${url}`;
    return this.http.delete(url, options);
  }
}
