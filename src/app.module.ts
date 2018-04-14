import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { bootstrap } from "@anzar/core/bootstrap"
import { LayerModule } from "@anzar/core/layer.module"

import { AppComponent } from "./app.component"


@NgModule({
    imports: [
        BrowserModule,
        LayerModule
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
