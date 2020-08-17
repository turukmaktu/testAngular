import { Injectable } from '@angular/core';
import { Track } from './models/Track';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TraksService {

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getElements() : Observable<Track[]>{
    return this.http.get<Track[]>('http://localhost:3000/tracks').pipe();
  }

  addElement(element: Track) : Observable<Track>{
    return this.http.post<Track>('http://localhost:3000/tracks', element, this.httpOptions).pipe();
  }

  updateElement(element: Track): Observable<Track>{
    return this.http.patch<Track>(`http://localhost:3000/tracks/${element.id}`, element, this.httpOptions).pipe();
  }

  getById(idEl) : Observable<Track>{
    return this.http.get<Track>(`http://localhost:3000/tracks/${idEl}`).pipe();
  }
  
  deleteElements(id: number): Observable<Track> {
    return this.http.delete<Track>(`http://localhost:3000/tracks/${id}`,this.httpOptions).pipe();
  }

}
