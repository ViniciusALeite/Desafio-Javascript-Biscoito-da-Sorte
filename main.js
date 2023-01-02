// //Variaveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const cookie1 = document.querySelector("#cookie1");
const reset = document.querySelector("#reset");
let phrases = [
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
    'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.',
    'Aquele que se importa com o sentimento dos outros, não é um tolo.',    
]    

// //Eventos
cookie1.addEventListener('click', yourLucky);
reset.addEventListener('click', toggleScreen);
document.addEventListener("keydown", pressKeyDown)

// Funções

function raffle(phrases) {  
    let sort = Math.floor(Math.random() * (phrases.length - 1));
    return phrases[sort]
}

function yourLucky() {
    toggleScreen()
    screen2.querySelector("#suaSorte").innerText = raffle(phrases)  
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function pressKeyDown(event) {        
     if(event.key == 'Enter') {
        yourLucky()
    }
}