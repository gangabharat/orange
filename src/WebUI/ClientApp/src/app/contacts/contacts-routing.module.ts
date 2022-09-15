import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactAddComponent } from "./contact-add/contact-add.component";
import { ContactDetailComponent } from "./contact-detail/contact-detail.component";

import { ContactsComponent } from "./contacts.component";

const routes: Routes = [
  { path: "", component: ContactsComponent },
  { path: "add", component: ContactAddComponent },
  { path: "details/:id", component: ContactDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsRoutingModule {}
