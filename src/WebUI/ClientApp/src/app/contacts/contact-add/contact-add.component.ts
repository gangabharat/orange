import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { BsModalService } from "ngx-bootstrap/modal";
import { Product } from "src/app/product/product.model";
import { ProductService } from "src/app/product/product.service";

@Component({
  selector: "app-contact-add",
  templateUrl: "./contact-add.component.html",
  styleUrls: ["./contact-add.component.css"],
})
export class ContactAddComponent implements OnInit {
  loading = false;
  hideClose = false;
  parentObject: any;
  constructor(
    private productService: ProductService,
    private bsModalService: BsModalService
  ) {}

  ngOnInit(): void {
    //console.log(this.parentObject);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      //this.loading = true;
      const product = form.value.product as Product;
      product.id = new Date().valueOf().toString();
      console.log(product);
      this.productService.add(product);
      form.resetForm();

      //this.newListCancelled();

      setTimeout(() => {
        //this.loading = false;
      }, 1000 * 2);
    }
  }

  onClose() {
    //this.bsModalService.hide(1);
    this.bsModalService._hideModal(1);
    //this.bsModalService.h
  }
}
