import { Component, Input } from '@angular/core';
import { Contact } from '../../models/contact.interface';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent {
  @Input() contact: Contact;
}
