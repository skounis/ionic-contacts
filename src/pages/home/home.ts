import { Component } from '@angular/core';
import { EditPage } from '../edit/edit';
import { NavController } from 'ionic-angular';

import { Contact } from '../../models/contact';
import { ContactStore } from '../../stores/contact.store'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public store: ContactStore
  ) {

  }

  ionViewDidLoad() {
  	this.store.load();
    console.log(this.store.records);
  }

  show(record) {
  	this.navCtrl.push(EditPage, { record: record, store: this.store });
  }

  create() {
    this.navCtrl.push(EditPage, { record: null, store: this.store });
  }

}
