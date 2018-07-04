import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';

import { Contact } from '../../models/contact';
import { ContactStore } from '../../stores/contact.store';
//
// Model Driven forms
// https://scotch.io/tutorials/using-angular-2s-model-driven-forms-with-formgroup-and-formcontrol
// https://scotch.io/tutorials/how-to-build-nested-model-driven-forms-in-angular-2
//
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html'
})
export class EditPage implements OnInit {

  record: Contact;
  private store: ContactStore;

  form: FormGroup;

  constructor(
    navParams: NavParams,
    private fb: FormBuilder,
    public navCtrl: NavController) {

    this.record = navParams.get('record') || <Contact>{};
    this.store = navParams.get('store');
  }


  ngOnInit() {
    this.form = this.fb.group(
      {
        firstName: [this.record.firstname],
        lastName: [this.record.lastname, Validators.required],
        email: [this.record.email, [Validators.required, Validators.email]],
        // phones: this.fb.array([
        //   this.initPhones(),
        // ])
        phones: this.fb.array(this.initPhones())
      }
    );

    console.log(this.form);
  }

  initPhones() {
    // initialize our address
    const controls = [];

    for (let i=0; i < this.record.phones.length; i++) {
      controls.push(
        this.fb.group({
          phoneType: [this.record.phones[i].phoneType, Validators.required],
          phoneNumber: [this.record.phones[i].phoneNumber, Validators.pattern(/^0\d{2}-\d{7}/gm)]
        })
      )
    }

    return controls

    // return this.fb.group({
    //   phoneType: ['', Validators.required],
    //   phoneNumber: ['']
    // });
  }

  addPhones() {
    // add phones to the list
    const control = <FormArray>this.form.controls['phones'];
    // control.push(this.initPhones());
  }
}
