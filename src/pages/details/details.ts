import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EditPage } from '../edit/edit';
import { ContactStore } from '../../stores/contact.store';
import { Contact } from '../../models/contact';


@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

  record: Contact;
  private store: ContactStore;

  constructor(public navCtrl: NavController,
    navParams: NavParams) {
    this.record = navParams.get('record') || <Contact>{};
    this.store = navParams.get('store');
  }

  edit() {
    this.navCtrl.push(EditPage, { record: this.record, store: this.store });
  }
}
