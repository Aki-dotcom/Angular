import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { MyObject } from '../model/object';



@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}
  
  getAll(): Observable<MyObject[]> {
    return this.http.get<MyObject[]>(this.apiUrl);
  }

  getAllById(id: number): Observable<MyObject> {
    return this.http.get<MyObject>(`${this.apiUrl}/${id}`);
  }

  addObject(object:MyObject): Observable<MyObject> {
    return this.http.post<MyObject>(this.apiUrl, object)
  }

  putObject(object: MyObject): Observable<MyObject> {
  return this.http.put<MyObject>(`${this.apiUrl}/${object.id}`, object);
  }
  
  deleteObject(object: MyObject): Observable<MyObject>{
    return this.http.delete<MyObject>(`${this.apiUrl}/${object.id}`)
  }

}
