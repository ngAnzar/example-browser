import * as fs from "fs"

import { config, options } from "@anzar/build"
import { htmlPlugin } from "@anzar/build-browser"


options.extend("stylusImports", fs.realpathSync("./src/theme.styl"))


export default config("@anzar/build-browser", {
    entry: {
        // polyfills: [],
        app: ["relative://src/polyfills.ts", "relative://src/app.module.ts"]
    },
    plugins: [
        htmlPlugin("relative://html/app.pug")
    ],
    resolve: {
        alias: {
            mdi: "relative://node_modules/@mdi/svg/svg"
        }
    }
})
