import { Component, OnInit } from '@angular/core';
import { PhoneBoockElement } from '../../models/PhoneBoockElement';
import { PhoneBoockService } from '../../phone-boock.service'
@Component({
  selector: 'app-phone-boocks',
  templateUrl: './phone-boocks.component.html',
  styleUrls: ['./phone-boocks.component.scss']
})
export class PhoneBoocksComponent implements OnInit {

  constructor(private phoneBoockService: PhoneBoockService) {}

  public sort: boolean = true;

  phoneBoocks: PhoneBoockElement[];

  ngOnInit(): void {
    this.getElements(this.sort);
  }

  changeSort(){
    this.sort = !this.sort;
    this.getElements(this.sort);
  }

  del(phoneBoock: PhoneBoockElement){
    this.phoneBoockService.deleteElements(phoneBoock);
    this.getElements(this.sort);
  }

  getElements(sort: boolean){
    this.phoneBoockService.getElements(sort).subscribe((phoneBoocks) => {
      this.phoneBoocks = phoneBoocks;
    });
  }
}
