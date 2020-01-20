import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsListComponent } from './pages/contacts-list/contacts-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NewContactComponent } from './pages/new-contact/new-contact.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';


const routes: Routes = [
  { path: 'new-contact', component: NewContactComponent },
  { path: 'edit-contact/:id', component: EditContactComponent },
  { path: 'home', component: ContactsListComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
