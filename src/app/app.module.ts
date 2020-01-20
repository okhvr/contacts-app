import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsListComponent } from './pages/contacts-list/contacts-list.component';
import { EditableContactComponent } from './components/editable-contact/editable-contact.component';
import { ContactsService } from './services/contacts.service';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { NewContactComponent } from './pages/new-contact/new-contact.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    PageNotFoundComponent,
    EditableContactComponent,
    ContactItemComponent,
    DeleteModalComponent,
    NewContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
