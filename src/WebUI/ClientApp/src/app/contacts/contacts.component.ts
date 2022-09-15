import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { Observable } from "rxjs";
import { Product } from "../product/product.model";
import { ProductService } from "../product/product.service";
import { CacheService } from "../_shared/cache.service";

import { ContactAddComponent } from "./contact-add/contact-add.component";
import { ContactDeleteComponent } from "./contact-delete/contact-delete.component";
import { ContactDetailComponent } from "./contact-detail/contact-detail.component";
import { ContactEditComponent } from "./contact-edit/contact-edit.component";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.css"],
})
export class ContactsComponent implements OnInit {
  initialProduct: Product;
  products$ = new Observable<Product[]>();
  bsModalRef: BsModalRef;
  loading = false;

  @ViewChild("form", { static: false }) form: NgForm;
  constructor(
    private bsModalService: BsModalService,
    private productService: ProductService,
    private cs : CacheService
  ) {}

  ngOnInit(): void {
    this.onLoad();
    this.products$ = this.productService.puppies$;
    this.initialProduct = {
      name: "firs",
      model: "nice",
      address: "add",
      id: "1",
      number: "sf",
    };
  }
  onLoad(){
    const data = this.cs.load("Products");
    // Return data from cache
    if (data !== null) {
      //console.log(data);
      this.productService.load(data);
    }
  }

  onAdd() {
    this.bsModalRef = this.bsModalService.show(ContactAddComponent, {
      initialState: { hideClose: true },
    });
  }

  onDetails(product: Product) {
    this.bsModalRef = this.bsModalService.show(ContactDetailComponent, {
      initialState: { product: product, hideClose: false },
    });
  }

  onEdit(product: Product) {
    this.bsModalRef = this.bsModalService.show(ContactEditComponent, {
      initialState: { loadProduct: product, hideClose: false },
    });
  }

  onRemove(product: Product) {
    this.bsModalRef = this.bsModalService.show(ContactDeleteComponent, {
      initialState: { product: product, hideClose: false },
    });
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
