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

    this.record = navParams.get('record') || Contact.instance();
    this.store = navParams.get('store');
  }


  ngOnInit() {
    this.form = this.fb.group(
      {
        firstname: [this.record.firstname],
        lastname: [this.record.lastname, Validators.required],
        email: [this.record.email, [Validators.required, Validators.email]],
        phones: this.fb.array(this.initPhones())
      }
    );

    console.log(this.form);
  }

  /**
   * Initialiaze the phones control(s)
   * Creates an array of controlls and pushed an entry.
   */
  initPhones() {
    // initialize phones
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
  }

  /**
   * Push a new set of phone controls
   */
  addPhone() {
    const control = <FormArray>this.form.controls['phones'];
    // add phone to the list
    const c = this.fb.group({
      phoneType: ['mobile', Validators.required],
      phoneNumber: ['', Validators.pattern(/^0\d{2}-\d{7}/gm)]
    })
    control.push(c);
  }

  /**
   * Remove the selected phone (form controls)
   */
  removePhone(i: number) {
    const control = <FormArray>this.form.controls['phones'];;
    control.removeAt(i);
  }

  /**
   * Serialize the Contact (Create or Update).
   * Pop to the previous screen when finish.
   */
  save() {
    console.log('Record:', this.record);
    console.log('Form:', this.form.value);

    const updated = Object.assign(this.record, this.form.value)

    console.log('Updated:', updated);

    this.store.update(updated);
    this.navCtrl.pop();
  }
}
