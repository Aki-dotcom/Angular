import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ObjectInterface {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}
  
  getAll(): Observable<ObjectInterface[]> {
    return this.http.get<ObjectInterface[]>(this.apiUrl);
  }

  getAllById(id: number): Observable<ObjectInterface> {
    return this.http.get<ObjectInterface>(`${this.apiUrl}/${id}`);
  }
}
