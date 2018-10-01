import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { NzModule } from "@anzar/core/nz.module"
import { Test1Component } from "./screen/test-1.component"
import { Test2Component } from "./screen/test-2.component"


export const ROUTES: Routes = [
    { path: "test-screen-1", component: Test1Component },
    { path: "test-screen-2", component: Test2Component }
]


@NgModule({
    imports: [
        NzModule,
        RouterModule.forRoot(ROUTES, { enableTracing: false })
    ],
    declarations: [
        Test1Component,
        Test2Component,
    ],
    exports: [
        RouterModule
    ]
})
export class RoutesModule {

}
