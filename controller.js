import * as view from "./view.js"
import * as model from "./model.js"

init()

function init() {
    console.log("controller says hi!")
    view.init()
    model.init()
}