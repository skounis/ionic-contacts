import { Contact } from '../models/contact';
import { DataService } from '../services/data.service';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ContactStore {
	records: Contact[];
	current: Contact;

	constructor(
		private data: DataService,
		private toastCtrl: ToastController) {
	}

  /**
   * Load the contacts. Keep a cached varsion.
   */
	async load() {
		this.records = await this.data.getContacts().then(x => x);
		this.show('Contact list updated.');
		console.log(this.records);
	}

  /**
   * Serialize a contact. Create a new record on updated an
   * exiting one based on the given `_id`
   *
   * @param model The contact to be serialized.
   *
   * @return //TODO: describe the return
   */
	async update(model: Contact): Promise<Contact> {
		let response;

		if (model.id) {
			response = await this.data.updateContact(model);
			this.updateLocal(response);
			this.show('Contact updated.');
		} else {
			response = await this.data.createContact(model);
			this.createLocal(response);
			this.show('Contact created.');
		}
		return response;
	}

  /**
   * Delete a contact
   *
   * @param model The contact to be deleted.
   *
   */
	delete(model: Contact) {
		this.data.deleteContact(model.id).subscribe(data => {
			this.deleteLocal(model);
			this.show('Contact deleted.');
		});
	}

  //
  // We keep the local/cached records synchronized, so
  // there is no need to additional API call to get back
  // the updated list of records.
  //

  /**
   * Delete the record from the local/cached recordset.
   *
   * @param model The contact to be deleted.
   */
	private deleteLocal(model: Contact) {
    this.records = this.records.filter(x => x !== model);
  }

  /**
   * Update the record in the local/cached recordset
   *
   * @param model The contact to be updated.
   */
	private updateLocal(model: Contact) {
    let recordToUpdate = this.records.find(x => x.id === model.id);
		Object.assign(recordToUpdate, model);
	}

  /**
   * Create a record in the local/cached recordset
   *
   * @param model The just created contact.
   */
	private createLocal(model: Contact) {
    this.records.push(model);
	}

	/**
	 * Display a Toast Message
	 *
	 * @param message The message to be displayed.ß
	 */
	private show(message: string) {
		this.toastCtrl.create({
			message: message,
			duration: 3000,
			position: 'bottom'
		}).present();
	}

}
