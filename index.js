document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.getElementsByClassName('footer__group__individual')
    for (let i = 0; i < buttons.length; i++) {
        const element = buttons[i];
        element.addEventListener('mouseover', (e) => {handleOver(e.target)})
    }

    //Elements DOM
    const title = document.getElementById('title')
    const icon = document.getElementById('icon')
    const image = document.getElementById('image')
    const number = document.getElementById('number')
    const level = document.getElementById('level')
    const type = document.getElementById('type')
    const hability = document.getElementById('hability')
    const height = document.getElementById('height')
    const weight = document.getElementById('weight')

    const handleOver = (element) => {
        const pokemonId = element.getAttribute('data-id')
        const pokemon = dataPokemons.find((pokem) => pokem.number === pokemonId)
        title.innerHTML = pokemon.name
        icon.className = pokemon.icon
        image.src = `./images/${pokemon.number}.png`
        number.innerHTML = pokemon.number
        level.innerHTML = pokemon.level
        type.innerHTML = pokemon.type
        hability.innerHTML = pokemon.hability
        height.innerHTML = pokemon.height
        weight.innerHTML = pokemon.weight
    }
    
})


const dataPokemons = [
    {
        number: '001',
        name: 'bulbasaur',
        level: '64',
        type: 'grass',
        hability: 'overgrow',
        height: '0,7 M',
        weight: '6,9 KG',
        icon: 'fa-solid fa-leaf grass'
    },
    {
        number: '002',
        name: 'ivysaur',
        level: '142',
        type: 'grass',
        hability: 'overgrow',
        height: '1 M',
        weight: '13 KG',
        icon: 'fa-solid fa-leaf grass'
    },
    {
        number: '003',
        name: 'Venusaur',
        level: '263',
        type: 'poison',
        hability: 'overgrow',
        height: '2,0 M',
        weight: '100 KG',
        icon: 'fa-solid fa-biohazard poison'
    },
    {
        number: '004',
        name: 'Charmander',
        level: '62',
        type: 'fire',
        hability: 'blaze',
        height: '0,6 M',
        weight: '8,5 KG',
        icon: 'fa-solid fa-fire-flame-curved fire'
    }
    
]