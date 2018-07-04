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
export class DetailsPage implements OnInit {

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
        firstName: [this.record.firstname, Validators.required],
        lastName: [this.record.lastname, Validators.required],
        email: [this.record.email, [Validators.required, Validators.email]],
        mobilePhones: this.fb.array([
          this.initPhones(),
        ])
      }
    );
  }

  initPhones() {
    // initialize our address
    return this.fb.group({
      phoneType: ['', Validators.required],
      phoneNumber: ['']
    });
  }

  addPhones() {
    // add phones to the list
    const control = <FormArray>this.form.controls['mobilePhones'];
    control.push(this.initPhones());
  }
}
