import CharacterController from "./components/CharacterController.js";

class App {
    constructor() {
        this.controllers = {
            charController: new CharacterController()
        }
    }
}


window['app'] = new App();