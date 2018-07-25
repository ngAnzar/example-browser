// import path from "path"
import { config } from "@anzar/build"


export default config("@anzar/build-browser", {
    entry: {
        polyfills: "src/polyfills.ts",
        app: "src/app.module.ts"
    }
})
