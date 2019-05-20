import CharacterService from "./CharacterService.js";

//Private

let _charService = new CharacterService()

function _drawCharacters() {
    let characters = _charService.Characters
    let template = ''
    for (let i = 0; i < characters.length; i++) {
        const character = characters[i];
        template += character.listTemplate
    }
    document.getElementById('character-list').innerHTML = template
}
//Public
export default class CharacterController {
    constructor() {
        //register subscribers
        _charService.addSubscriber('characters', _drawCharacters)
        //fetch data
        _charService.getApiCharacters();
    }
}