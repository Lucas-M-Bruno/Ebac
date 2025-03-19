function PokemonVoador() {
    this.tipo = "voador",
    this.vantagens = ["inseto", "planta", "lutador"],
    this.fraquezas = ["eletrico", "gelo", "pedra"]
}

function Pidgeot(hp, specialAttack, specialDefence, speed) {

    PokemonVoador.call(this)

    this.hp = hp,
    this.specialAttack = specialAttack,
    this.specialDefence = specialDefence,
    this.speed = speed
}

function Staraptor(hp, specialAttack, specialDefence, speed) {

    PokemonVoador.call(this)

    this.hp = hp,
    this.specialAttack = specialAttack,
    this.specialDefence = specialDefence,
    this.speed = speed
}

const pidgeotDoAsh = new Pidgeot(370, 262, 262, 331);
const pidgeotDoBlue = new Pidgeot(308, 236, 245, 240);
const staraptorDoLarry = new Staraptor(374, 218, 240, 328)

console.log(pidgeotDoAsh);
console.log(staraptorDoLarry);
console.log(pidgeotDoBlue);