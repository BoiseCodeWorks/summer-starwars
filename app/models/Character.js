export default class Character {
    constructor(data) {
        this.name = data.name
        this.house = data.house
        this.eyeColour = data.eyeColour
        this.image = data.image
    }

    get listTemplate() {
        return `<li class="${this.house}" style="color: ${this.eyeColour};">
        <img src="${this.image}" />
        ${this.name} - ${this.house}
        </li>`
    }
}

