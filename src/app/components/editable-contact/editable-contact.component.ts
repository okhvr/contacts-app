import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact.interface';

@Component({
  selector: 'app-editable-contact',
  templateUrl: './editable-contact.component.html',
  styleUrls: ['./editable-contact.component.scss']
})
export class EditableContactComponent implements OnInit {
  @Input() isEditable = false;
  @Input() contact: Contact;

  @Output() save: EventEmitter<Contact> = new EventEmitter();
  @Output() delete = new EventEmitter();

  maxItemsCount: 3;
  isDeleteConfirmation = false;

  ngOnInit() {
    if (!this.contact) {
      this.contact = {
        last_name: '',
        first_name: '',
        phone: [''],
        email: [''],
        id: null,
        photo: null
      };
    }
  }

  saveContact() {
    // filter out empty fields
    this.contact.email = this.contact.email.filter(i => i);
    this.contact.phone = this.contact.phone.filter(i => i);
    this.save.emit(this.contact);
  }

  closeModalAndDeleteIfNeeded(isDeleted: boolean) {
    if (isDeleted) {
      this.delete.emit();
    } else {
      this.toggleDeleteModal();
    }
  }

  toggleDeleteModal() {
    this.isDeleteConfirmation = !this.isDeleteConfirmation;
  }

  trackByIndex(index: number): number {
    return index;
  }

  addPhone() {
    this.addField('phone');
  }

  removePhone(index: number) {
    this.removeField('phone', index);
  }

  addEmail() {
    this.addField('email');
  }

  removeEmail(index: number) {
    this.removeField('email', index);
  }

  private addField(field: 'phone' | 'email') {
    this.contact[field] = [...this.contact[field], ''];
  }

  private removeField(field: 'phone' | 'email', index: number) {
    this.contact[field] = this.contact[field].filter((item, i) => i !== index);
  }
}
