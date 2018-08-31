import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { bootstrap } from "@anzar/core/bootstrap"
import { LayerModule } from "@anzar/core/layer.module"
import { ButtonModule } from "@anzar/core/button.module"
import { CardModule } from "@anzar/core/card.module"
import { InputModule } from "@anzar/core/input.module"

import { AppComponent } from "./app.component"


@NgModule({
    imports: [
        BrowserModule,
        LayerModule,
        ButtonModule,
        CardModule,
        InputModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}


bootstrap(AppModule)
