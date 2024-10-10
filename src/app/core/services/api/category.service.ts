import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Category, CategoryResponse } from '../../../features/categories/model/category';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService<Category> {

  private url = environment.apiUrl + 'category';

  constructor(http: HttpClient) { 
    super(http);
    this.setBaseUrl(this.url);
  }

  getCategoriesWithMessages(): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>(this.url)
  }
  
}
