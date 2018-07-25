// import { config } from "@anzar/build"
import { config } from "@anzar/build"


export default config("@anzar/build-browser", {
    entry: {
        polyfills: "relative://src/polyfills.ts",
        app: "relative://src/app.module.ts"
    }
})
