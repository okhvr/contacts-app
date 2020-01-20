import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.interface';
import contactsJSON from '../../assets/contacts.json';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private lastId: number;
  constructor() {
    if (!localStorage.getItem('contacts')) {
      const contacts: Contact[] = contactsJSON;
      this.lastId = contacts.length;

      const contactsStorage = contacts.reduce((acc, cur) => ({...acc, [cur.id]: cur}), {});
      this.set(contactsStorage);
    } else {
      const last = Object.keys(this.get()).pop();
      this.lastId = +last;
    }
  }

  getContacts(): Contact[] {
    return Object.values(this.get());
  }

  getContact(id: number): Contact {
    return this.get()[id];
  }

  addContact(contact: Contact): void {
    const id = contact.id || ++this.lastId;
    contact.id = id;
    const contacts = this.get();
    contacts[id] = contact;
    this.set(contacts);
  }

  deleteContact(id: number): void {
    const contacts = this.get();
    delete contacts[id];
    this.set(contacts);
  }

  private set(data: any): void {
    try {
      localStorage.setItem('contacts', JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  private get(): {number: Contact} {
    try {
      return JSON.parse(localStorage.getItem('contacts'));
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }
}
