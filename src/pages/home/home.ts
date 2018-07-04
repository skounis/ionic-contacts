import { Component } from '@angular/core';
import { DetailsPage } from '../details/details';
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
  	this.navCtrl.push(DetailsPage, { record: record, store: this.store });
  }

}
