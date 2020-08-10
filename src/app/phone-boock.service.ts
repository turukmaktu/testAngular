import { Injectable, OnInit } from '@angular/core';
import { PhoneBoockElement } from './models/PhoneBoockElement';
import {HttpClient} from '@angular/common/http';
import * as moment from 'moment'

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhoneBoockService{

  phoneBoockElements: PhoneBoockElement[];

  phoneBoockElementsObserver: Observable<PhoneBoockElement[]>;

  constructor(private http: HttpClient) {
    this.phoneBoockElements = [];
  }

  getElements(sort: boolean) : Observable<PhoneBoockElement[]>{

    if(this.phoneBoockElements.length != 0){
      return of(this.phoneBoockElements.sort((first:  PhoneBoockElement, second: PhoneBoockElement) => {
        let firstSort = Number(first.select);
        let secondSort = Number(second.select);
      
          if(sort){
            return firstSort - secondSort;
          }else{
            return  secondSort - firstSort;
          }
        }));
    }else{
      return this.http.get('assets/getPhones.json').pipe(map(data => {

        let elements: any[] = data['elements'];

        return elements.sort((first , second) => {
          if(sort){
            return first.select - second.select;
          }else{
            return second.select - first.select;
          }
        }).map((element) => {
          
          let el: PhoneBoockElement = {
            fio: element.fio,
            phone: element.phone,
            date: moment(element.date),
            comment: element.comment,
            select: element.select
          };

          this.phoneBoockElements.push(el);
          
          return el;
        });
      }));
    }

  }

  addElement(element: PhoneBoockElement) {
    
    console.log({
      addedPhoneBockElement: element
    });
    
    this.phoneBoockElements.push(element);
    return true;
  }

  updateElement(idEl, element: PhoneBoockElement){

    
    this.phoneBoockElements.map((el,id) => {
      
      if(id == idEl){
        el.fio = element.fio;
        el.phone = element.phone;
        el.date = element.date;
        el.comment = element.comment;
        el.select = element.select;
      }
    })

  }

  getById(idEl) : PhoneBoockElement{

    let result : PhoneBoockElement;

    this.phoneBoockElements.map((el,id) => {
      if(id == idEl){
        result = el;
      }
    })

    return result;
  }
  
  deleteElements(element: PhoneBoockElement) {
     console.log({
       deletedPhoneBockElement: element
     });

     this.phoneBoockElements = this.phoneBoockElements.filter((checkElement) => { return checkElement != element });
     return true;

  }

}
