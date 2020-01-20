import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { Router } from '@angular/router';
import { Contact } from '../../models/contact.interface';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html'
})
export class NewContactComponent {

  constructor(private router: Router, private contactService: ContactsService) { }

  saveContactAndNavigate(contact: Contact) {
    this.contactService.addContact(contact);
    this.navigateToHome();
  }

  private navigateToHome() {
    this.router.navigate(['home']);
  }
}
