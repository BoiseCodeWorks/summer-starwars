import Character from '../models/Character.js'

//Private
let _api = new axios.create({
    baseURL: 'http://hp-api.herokuapp.com/api'
})

let _sandboxApi = new axios.create({
    baseURL: 'http://bcw-sandbox.herokuapp.com/api'
})


let _state = {
    characters: [],
}
let _subscribers = {
    characters: []
}

function setState(propName, data) {
    _state[propName] = data
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

    getApiCharacters() {
        _api.get('characters')
            .then(response => {
                let data = response.data.map(rawData => new Character(rawData))
                setState('characters', data)
            })
            .catch(err => {
                console.error(err)
            })
    }


}