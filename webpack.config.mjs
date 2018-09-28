import * as fs from "fs"

import { config, options } from "@anzar/build"


options.extend("stylusImports", fs.realpathSync("./src/theme.styl"))


export default config("@anzar/build-browser", {
    entry: {
        // polyfills: [],
        app: ["relative://src/polyfills.ts", "relative://src/app.module.ts"]
    },
    resolve: {
        alias: {
            mdi: "relative://node_modules/@mdi/svg/svg"
        }
    }
})
