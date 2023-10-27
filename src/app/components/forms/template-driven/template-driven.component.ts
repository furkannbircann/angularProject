import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
})
export class TemplateDrivenComponent implements OnInit {
  @ViewChild('frm', { static: true }) form!: NgForm;
  ngOnInit(): void {
    setTimeout(() => {
      this.form.setValue({
        name: 'Furkan',
        surname: 'Bircan',
        tel: '5555555555',
        address: {
          city: 'Kayseri',
          country: 'Türkiye',
          street:'Bağdat Caddesi'
        },
        job: 'Software Developer',
      });
      //-----------------------------------------------
      //use it to change a few fields in the form
      // this.form.control.patchValue({
      //   address: {
      //     city: 'Kayseri',
      //     country: 'Türkiye',
      //     street:'Bağdat Caddesi'
      //   },
      // });
      //-----------------------------------------------
      //Reset form
      // this.form.reset();
      // this.form.resetForm();
      // this.form.onReset();
      //-----------------------------------------------
    }, 200);
    console.log('form.form',this.form.form);
    console.log('form.control',this.form.control);
    console.log('form',this.form);
  }
  onSubmit(data: {
    name: string;
    surname: string;
    tel: string;
    address: string;
    job: string;
  }) {
    console.log(data);
    console.log('Valid : ', this.form.valid);
    console.log('Touched : ', this.form.touched);
    console.log('Submitted : ', this.form.submitted);
    console.log('Dirty : ', this.form.dirty);
  }
}
