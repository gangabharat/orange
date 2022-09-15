import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductRoutingModule } from "./product-routing.module";
import { ProductComponent } from "./product.component";
import { ProductAddComponent } from "./product-add/product-add.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductWidgetComponent } from "./product-widget/product-widget.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { FormsModule } from "@angular/forms";
import { ProductDeleteComponent } from "./product-delete/product-delete.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    ProductComponent,
    ProductAddComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductWidgetComponent,
    ProductEditComponent,
    ProductDeleteComponent,
  ],
  imports: [CommonModule, FormsModule, FontAwesomeModule, ProductRoutingModule],
})
export class ProductModule {}
