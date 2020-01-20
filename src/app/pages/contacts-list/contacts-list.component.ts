import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../models/contact.interface';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  private contactList: Contact[];

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contactList = this.contactsService.getContacts();
  }
}
