import { Component, OnInit } from '@angular/core';
import { PhoneBoockElement } from '../../models/PhoneBoockElement';
import { PhoneBoockService } from '../../phone-boock.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-phone-boocks',
  templateUrl: './phone-boocks.component.html',
  styleUrls: ['./phone-boocks.component.scss']
})
export class PhoneBoocksComponent implements OnInit {

  constructor(private phoneBoockService: PhoneBoockService) {}

  public sort: boolean = true;

  phoneBoocks: PhoneBoockElement[];

  forms: FormGroup[] = [];

  ngOnInit(): void {
    this.getElements(this.sort);
  }

  changeSort(){
    this.sort = !this.sort;
    this.getElements(this.sort);
  }

  update(phoneBoock: PhoneBoockElement){
      this.phoneBoockService.updateElement(phoneBoock).subscribe(data => {
        this.getElements(this.sort);  
      });
  }

  save(form){
    let savedElement: PhoneBoockElement = {
      id: form.controls.id.value,
      fio: form.controls.fio.value,
      phone: form.controls.phone.value,
      date: new Date(form.controls.date.value),
      comment: form.controls.comment.value,
      select: form.controls.select.value
    }

    this.update(savedElement);
  }
  
  add(){
    this.phoneBoockService.addElement({
      id: null,
      fio: "added element fio",
      phone: "+7 888 999 11 22",
      date: new Date(),
      comment: "test",
      select: false
    }).subscribe(data => this.getElements(this.sort))
  }

  del(id: number){
    this.phoneBoockService.deleteElements(id).subscribe(data => {
      this.getElements(this.sort);
    });
  }

  getElements(sort: boolean){
    this.phoneBoockService.getElements(sort).subscribe((phoneBoocks) => {
      this.phoneBoocks = phoneBoocks;

      this.forms = [];

      //заполнить данные для формы
      this.phoneBoocks.map(phoneBoock => {

        this.forms.push(new FormGroup({
          id: new FormControl(phoneBoock.id, Validators.required),
          fio: new FormControl(phoneBoock.fio, Validators.required),
          phone: new FormControl(phoneBoock.phone, Validators.required),
          date: new FormControl(phoneBoock.date, Validators.required),
          comment: new FormControl(phoneBoock.comment, Validators.required),
          select: new FormControl(phoneBoock.select, Validators.required),
        }));
      });
    });
  }
}
