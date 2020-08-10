import { Injectable } from '@angular/core';
import { Track } from './models/Track';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment'

@Injectable({
  providedIn: 'root'
})
export class TraksService {

  tracks: Track[];

  tracksObserver: Observable<Track[]>

  constructor(private http: HttpClient) { 
    this.tracks = [];
  }

  getElements() : Observable<Track[]>{
    if(this.tracks.length != 0){
      return of(this.tracks);
    }else{
      return this.http.get('assets/getTraks.json').pipe(map(data => {

        let elements: any[] = data['elements'];

        return elements.map((element) => {
          
          let el: Track = {
            address: element.address,
            purshaseDate: moment(element.purshaseDate),
            purshasePrice: element.purshasePrice,
            rehabBudgetUsed: element.rehabBudgetUsed,
            saleDate: moment(element.saleDate),
            salePrice: element.salePrice
          };

          this.tracks.push(el);
          
          return el;
        });
      }));
    }
  }
}
