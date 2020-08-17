import { Component, OnInit } from '@angular/core';
import { TraksService } from '../../traks.service';
import { Track } from '../../models/Track';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-traks',
  templateUrl: './traks.component.html',
  styleUrls: ['./traks.component.scss']
})
export class TraksComponent implements OnInit {

  constructor(private traksService: TraksService ) { }

  elements: Track[];

  forms: FormGroup[] = [];

  ngOnInit(): void {
    this.getElements();
  }

  getElements(){
    this.traksService.getElements().subscribe((elements) => {
      this.elements = elements;

      this.forms = [];

      //заполнить данные для формы
      this.elements.map(element => {

        this.forms.push(new FormGroup({
          id: new FormControl(element.id, Validators.required),
          address: new FormControl(element.address, Validators.required),
          purshaseDate: new FormControl(element.purshaseDate, Validators.required),
          purshasePrice: new FormControl(element.purshasePrice, Validators.required),
          rehabBudgetUsed: new FormControl(element.rehabBudgetUsed, Validators.required),
          saleDate: new FormControl(element.saleDate, Validators.required),
          salePrice: new FormControl(element.salePrice, Validators.required),
        }));
      });
    });

  }

  del(id: number){
    this.traksService.deleteElements(id).subscribe(data => {
      this.getElements();
    });
  }

  update(element: Track){
    this.traksService.updateElement(element).subscribe(data => {
      this.getElements();  
    });
}

  save(form){
    let savedElement: Track = {
      id: form.controls.id.value,
      address: form.controls.address.value,
      purshaseDate: new Date(form.controls.purshaseDate.value),
      purshasePrice: form.controls.purshasePrice.value,
      rehabBudgetUsed: form.controls.rehabBudgetUsed.value,
      saleDate: new Date(form.controls.saleDate.value),
      salePrice: form.controls.salePrice.value,
    }

  this.update(savedElement);
}

add(){
  this.traksService.addElement({
    id: null,
    address: "added element address",
    purshaseDate: new Date(),
    purshasePrice: 100,
    rehabBudgetUsed: 200,
    saleDate: new Date(),
    salePrice: 300
  }).subscribe(data => this.getElements())
}
}
