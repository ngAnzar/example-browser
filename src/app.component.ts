import { Component, ChangeDetectorRef, Inject } from "@angular/core"
import { FormGroup, FormControl } from "@angular/forms"
import { SelectionEvent } from "@anzar/core/selection.module"

import { DataSource, StaticSource } from "@anzar/core/core.module"
import { DialogService } from "@anzar/core/dialog.module"


export interface User {
    id: string
    firstName: string
    lastName: string
    age: number
    name: string
}


let fakeData: User[] = []
for (let i = 0; i < 100000; i++) {
    fakeData.push({
        id: `user-${i}`,
        firstName: `FirstName-${i}`,
        lastName: `LastName-${i}`,
        age: i + 20,
        get name() {
            return `${this.firstName} ${this.lastName}`
        }
    })
}


@Component({
    selector: "app",
    templateUrl: "./app.template.pug"
})
export class AppComponent {
    public title: string = "Hello World"
    public form = new FormGroup({
        testInput: new FormControl()
    })

    public hideXyz: boolean = true
    public selected: boolean[] = [false, true, true, false]

    public readonly users: DataSource<User> = new StaticSource(fakeData)

    // public constructor(@Inject(ChangeDetectorRef) protected cdr: ChangeDetectorRef) {

    // }

    public constructor(@Inject(DialogService) protected dialog: DialogService) {

    }

    public log(...val: any[]) {
        console.log(...val)
    }

    public onSelectionChange(event: SelectionEvent<any>) {
        console.log(event)
        // this.cdr.markForCheck()
    }

    public showAlert() {
        let p = {
            position: {
                align: "center",
                valign: "bottom",
                constraint: {
                    ref: "viewport",
                    insetMargin: {
                        bottom: 30
                    }
                }
            }
        }
        this.dialog.deleteLowRisk("Ügyfél", p as any).subscribe(event => {
            console.log(event)
        })
    }
}
