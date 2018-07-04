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
  cache = null;

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

  filter(event) {
    console.log(event);
    const val = event.target.value;
    console.log(val);

    if (!this.cache) {
      this.cache = this.store.records;
    }

    if (val && val.trim() != '') {
      this.store.records = this.cache.filter((item) => {
        return (item.lastname.toLowerCase().indexOf(val.toLowerCase()) > -1
                || item.firstname.toLowerCase().indexOf(val.toLowerCase()) > -1 );
      })
    } else {
      this.store.records = this.cache;
    }
  }

}
