import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.scss'],
})
export class ModelDrivenComponent implements OnInit {
  frm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.frm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: [''],
      tel: [''],
      address: this.formBuilder.group({
        country: [''],
        city: ['Kayseri', Validators.required],
        street: [''],
      }),
      job: ['', Validators.required],
    });
    this.frm.get('address.city')?.setValue("Ankara",{onlySelf:true});
  }
  onSubmit(data: any) {
    console.log(data.value);
  }
}
