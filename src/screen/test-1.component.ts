import { Component } from "@angular/core"
import { DataSource, StaticSource } from "@anzar/core/core.module"


export interface User {
    firstName: string,
    lastName: string
}


@Component({
    templateUrl: "./test-1.template.pug"
})
export class Test1Component {
    // public readonly users: DataSource<User> = new StaticSource([
    //     { firstName: "Teszt", lastName: "Elek" },
    //     { firstName: "Mésodik", lastName: "User" }
    // ])
}
