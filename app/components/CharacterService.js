//Private

let _store = {
    characters: []
}
let _subscribers = {
    characters: []
}

function setState(propName, data) {
    _store[propName] = data,
        _subscribers[propName].forEach(fn => fn())
}


//Public
export default class CharacterService {
    addSubscriber(propName, fn) {
        _subscribers[propName].push(fn)
    }

    get Characters() {
        return _store.characters.map(c => new Character(c))
    }
}