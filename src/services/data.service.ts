import { Contact } from '../models/contact';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../config';

@Injectable()
export class DataService {

	constructor(private http: HttpClient) {

	}

  //
  // Contacts
  //
  getContacts(): Promise<Contact[]> {
  	let url = `${apiUrl}contacts`;
  	return this.http.get<any>(url).toPromise();
  }

	/**
	 *	Create contact
	 *
	 * @param contact Contact
	 * @return Contact The updated contact
	 */
  createContact(contact: Contact): Promise<Contact> {
  	let url = `${apiUrl}contacts`;
  	return this.http.post<Contact>(url, contact).toPromise();
  }

	/**
	 *	Update contact
	 *
	 * @param contact Contact
	 * @return Contact The updated contact
	 */
  updateContact(contact: Contact): Promise<any> {
  	let url = `${apiUrl}contacts/${contact.id}`;
  	return this.http.put<Contact>(url, contact).toPromise();
  }

	/**
	 * Delete contact
	 *
	 * @param id The ID of the Contact to be deleted
	 */
  deleteContact(id: string) {
  	let url = `${apiUrl}contacts/${id}`;
		return this.http.delete<any>(url);
  }
}
