import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CardRoutingModule } from "./card-routing.module";
import { CardComponent } from "./card.component";

@NgModule({
    imports: [CommonModule],
    declarations: [CardComponent],
    exports: [CardComponent]
})
export class CardModule {}
