import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { ReactiveFormsModule } from "@angular/forms"
import { A11yModule } from "@angular/cdk/a11y"

import { bootstrap } from "@anzar/core/bootstrap"
import { NzModule } from "@anzar/core/nz.module"

import { AppComponent } from "./app.component"
import { RoutesModule } from "./routes.module"


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        A11yModule,
        NzModule,
        RoutesModule
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
