import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../models/contact.interface';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html'
})
export class EditContactComponent implements OnInit {

  contact: Contact;

  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactsService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.navigateToHome();
    }

    this.contact = this.contactService.getContact(+id);
    if (!this.contact) {
      this.navigateToHome();
    }
  }

  saveContactAndNavigate(contact: Contact) {
    this.contactService.addContact(contact);
    this.navigateToHome();
  }

  deleteContactAndNavigate() {
    this.contactService.deleteContact(this.contact.id);
    this.navigateToHome();
  }

  private navigateToHome() {
    this.router.navigate(['home']);
  }
}
