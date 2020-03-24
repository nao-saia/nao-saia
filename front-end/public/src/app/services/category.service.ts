import { Injectable } from '@angular/core';
import { HttpWrapperService } from './http-wrapper.service';
import { Observable } from 'rxjs';
import { Category } from '../domain/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  path = 'categories';

  constructor(private http: HttpWrapperService) {

  }
  
  findAll(): Observable<Category>  {
    return this.http.get<Category>(this.path);
  }
}
