import { Component, OnInit } from '@angular/core';
import { PhoneBoockElement } from '../../../models/PhoneBoockElement';
import { PhoneBoockService } from '../../../phone-boock.service'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import * as moment from 'moment'

@Component({
  selector: 'app-bock-entry-edit',
  templateUrl: './bock-entry-edit.component.html',
  styleUrls: ['./bock-entry-edit.component.scss']
})
export class BockEntryEditComponent implements OnInit {

  id: any;

  element: PhoneBoockElement;

  constructor(
    private route: ActivatedRoute,
     private phoneBoockService: PhoneBoockService,
     private location: Location
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  form: FormGroup;

  ngOnInit(): void {

    if(this.id){
      this.element = this.phoneBoockService.getById(this.id);  
    }else{
      this.element = {
        fio: "",
        phone: "",
        date: moment(),
        comment: "",
        select: false
      };
    }

    this.form = new FormGroup({
              
      "fio": new FormControl(this.element.fio, Validators.required),
      "phone": new FormControl(this.element.phone, [
                          Validators.required
                      ]),
      "date": new FormControl(this.element.date, Validators.required),
      "comment": new FormControl(this.element.comment, Validators.required),
      "select": new FormControl(this.element.select, Validators.required) 
  });

  }

  save(){

    let savedElement: PhoneBoockElement = {
      fio: this.form.controls.fio.value,
      phone: this.form.controls.phone.value,
      date: moment(this.form.controls.date.value),
      comment: this.form.controls.comment.value,
      select: this.form.controls.select.value
    }

    if(this.id){
      this.phoneBoockService.updateElement(this.id, savedElement)
    }else{
      this.phoneBoockService.addElement(savedElement)
    }

    console.log(this.form);

    this.location.back()
  }
}
