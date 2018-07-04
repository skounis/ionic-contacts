import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { DataService } from '../services/data.service';

@Injectable()
export class ContactStore {
	records: Contact[];
	current: Contact;

	constructor(private data: DataService) {

	}

  /**
   * Load the contacts. Keep a cached varsion.
   */
	async load() {
		this.records = await this.data.getContacts().then(x => x);
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
		} else {
			response = await this.data.createContact(model);
			this.createLocal(response);
		}
		return response;
	}

  /**
   * Delete a contact
   *
   * @param model The contact to be deleted.
   *
   * @return //TODO: describe the return
   */
	async delete(model: Contact): Promise<Contact> {
		let response = await this.data.deleteContact(model.id);
		this.deleteLocal(model);
		return response;
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

}
