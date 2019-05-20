export default class Character {
    constructor(data) {
        this.name = data.name
        this.url = data.url
        this.birthYear = data.birthYear || data.birth_year
        this.eyeColor = data.eyeColor || data.eye_color
    }

    get listTemplate() {
        return `<li style="color: ${this.eyeColor};">${this.name} - ${this.birthYear}</li>`
    }
}
