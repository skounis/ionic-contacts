import { Contact } from '../models/contact';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
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

  createContact(contact: Contact): Promise<Contact> {
  	let url = `${apiUrl}recipient`;
  	return this.http.post<Contact>(url, contact).toPromise();
  }

  updateContact(contact: Contact): Promise<any> {
  	let url = `${apiUrl}recipient/${contact.id}`;
  	return this.http.patch<Contact>(url, contact).toPromise();
  }

  deleteContact(id: string): Promise<Contact> {
  	let url = `${apiUrl}contact/${id}`;
  	return this.http.delete<any>(url).toPromise();
  }
}
