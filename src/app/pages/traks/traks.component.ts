import { Component, OnInit } from '@angular/core';
import { TraksService } from '../../traks.service';
import { Track } from '../../models/Track';
import * as moment from 'moment';
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
    this.traksService.getElements().subscribe((traksElements) => {
      this.elements = traksElements;
      this.elements.map((traksElementForm) => {
        this.forms.push(new FormGroup({
          address: new FormControl(traksElementForm.address, Validators.required),
          purshaseDate: new FormControl(traksElementForm.purshaseDate, Validators.required),
          purshasePrice: new FormControl(traksElementForm.purshasePrice, Validators.required),
          rehabBudgetUsed: new FormControl(traksElementForm.rehabBudgetUsed, Validators.required),
          saleDate: new FormControl(traksElementForm.saleDate, Validators.required),
          salePrice: new FormControl(traksElementForm.salePrice, Validators.required),
        }));
      });
    });
  }

  add(){

    let element: Track = {
      address: "",
      purshaseDate: moment(),
      purshasePrice: 0,
      rehabBudgetUsed: 0,
      saleDate: moment(),
      salePrice: 0
    };

    this.forms.push(new FormGroup({
      address: new FormControl(element.address, Validators.required),
      purshaseDate: new FormControl(element.purshaseDate, Validators.required),
      purshasePrice: new FormControl(element.purshasePrice, Validators.required),
      rehabBudgetUsed: new FormControl(element.rehabBudgetUsed, Validators.required),
      saleDate: new FormControl(element.saleDate, Validators.required),
      salePrice: new FormControl(element.salePrice, Validators.required),
    }));

    this.elements.push(element);
      
  }

}
