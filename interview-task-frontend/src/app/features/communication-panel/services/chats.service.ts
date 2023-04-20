import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../models/category.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  baseUrl = '/chat';

  constructor(private httpClient: HttpClient) { }

  getChats(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${environment.apiUrl}${this.baseUrl}`);
  }
}
