import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContactsRoutingModule } from "./contacts-routing.module";
import { ContactsComponent } from "./contacts.component";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { ContactAddComponent } from "./contact-add/contact-add.component";
import { ContactDetailComponent } from "./contact-detail/contact-detail.component";
import { FormsModule } from "@angular/forms";
import { ContactEditComponent } from "./contact-edit/contact-edit.component";
import { ContactDeleteComponent } from "./contact-delete/contact-delete.component";

@NgModule({
  declarations: [
    ContactsComponent,
    ContactListComponent,
    ContactAddComponent,
    ContactDetailComponent,
    ContactEditComponent,
    ContactDeleteComponent,
  ],
  imports: [CommonModule, FormsModule, ContactsRoutingModule],
})
export class ContactsModule {}
