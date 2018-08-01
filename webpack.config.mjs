// import { config } from "@anzar/build"
import { config } from "@anzar/build"


export default config("@anzar/build-browser", {
    entry: {
        // polyfills: [],
        app: ["relative://src/polyfills.ts", "relative://src/app.module.ts"]
    }
})
