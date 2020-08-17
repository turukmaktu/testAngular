import { Injectable } from '@angular/core';
import { PhoneBoockElement } from './models/PhoneBoockElement';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneBoockService{

  phoneBoockElementsObserver: Observable<PhoneBoockElement[]>;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getElements(sort: boolean) : Observable<PhoneBoockElement[]>{
    if(sort){
      return this.http.get<PhoneBoockElement[]>('http://localhost:3000/phones?_sort=select&_order=asc').pipe();
    }else{
      return this.http.get<PhoneBoockElement[]>('http://localhost:3000/phones?_sort=select&_order=desc').pipe();
    }
    
  }

  addElement(element: PhoneBoockElement) : Observable<PhoneBoockElement>{
    return this.http.post<PhoneBoockElement>('http://localhost:3000/phones', element, this.httpOptions).pipe();
  }

  updateElement(element: PhoneBoockElement): Observable<PhoneBoockElement>{
    return this.http.patch<PhoneBoockElement>(`http://localhost:3000/phones/${element.id}`, element, this.httpOptions).pipe();
  }

  getById(idEl) : Observable<PhoneBoockElement>{
    return this.http.get<PhoneBoockElement>(`http://localhost:3000/phones/${idEl}`).pipe();
  }
  
  deleteElements(id: number): Observable<PhoneBoockElement> {
    return this.http.delete<PhoneBoockElement>(`http://localhost:3000/phones/${id}`,this.httpOptions).pipe();
  }

}
