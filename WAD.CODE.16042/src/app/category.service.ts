import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from './Category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:5192/api/Category'; // Base API URL for Categories

  httpClient = inject(HttpClient);

  constructor(private http: HttpClient) {}

  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.apiUrl);
  }

  getById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${id}`);
  }

  update(id: number, category: Category): Observable<void> {
    return this.httpClient.put<void>(`${this.apiUrl}/${id}`, category);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Method to create a new category
  createCategory(category: { name: string }): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, category);
  }

  // Method to get all categories
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }
}
