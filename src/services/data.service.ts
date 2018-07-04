import { Contact } from '../models/contact';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { apiUrl } from '../config';
import { MASTER_TOKEN } from '../config';

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

  createContact(contact: Contact): Promise<Contact> {
		this.authorize(contact);

  	let url = `${apiUrl}contacts`;
  	return this.http.post<Contact>(url, contact).toPromise();
  }

  updateContact(contact: Contact): Promise<any> {
		this.authorize(contact);

  	let url = `${apiUrl}contacts/${contact.id}`;
  	return this.http.put<Contact>(url, contact).toPromise();
  }

  deleteContact(id: string): Promise<Contact> {
  	let url = `${apiUrl}contacts/${id}`;
  	return this.http.delete<any>(url).toPromise();
  }

	private authorize(body) {
		body['access_token'] = MASTER_TOKEN;
	}
}
