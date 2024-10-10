import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService<T> {
  private baseUrl: string = '';

  constructor(protected http: HttpClient) {}

  setBaseUrl(baseUrl: string): void {
    this.baseUrl = baseUrl;
  }

  getAll(): Observable<T> {
    return this.http.get<T>(this.baseUrl);
  }

  save(item: FormData): Observable<{ type: string; listMessage: string[] }> {
    return this.http.post<{ type: string; listMessage: string[] }>(this.baseUrl, item);
  }

  delete(id: string): Observable<{ type: string; listMessage: string[] }> {
    return this.http.delete<{ type: string; listMessage: string[] }>(`${this.baseUrl}/${id}`);
  }

  update(item: FormData): Observable<{ type: string; listMessage: string[] }> {
    return this.http.post<{ type: string; listMessage: string[] }>(`${this.baseUrl}/update`, item);
  }
}
