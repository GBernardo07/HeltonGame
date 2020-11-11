
function setup() {
  createCanvas(950,600);
  
}

function preload(){
  fundo=loadImage("../assets/fundo.png")
  fonte=loadFont("../assets/fonte.ttf")
  logo=loadImage("../assets/logo.png")
  nome=loadImage("../assets/nome.png")
  helton=loadImage("../assets/Helton.png")
  leo=loadImage("../assets/Leo.png")
}

function draw() {  
    textStyle(fonte);
    menu();
    wait();
} 

function createMenuButton() {
    menuButton = createButton('Menu'.fontsize(60));
    menuButton.position(800,5)
    menuButton.style('color', 'white')
    menuButton.style('background-color:black')

    menuButton.mouseClicked(menu)
}

function menu() {

    clear()
    removeElements()

    background(fundo)
    image(logo,530,75,300,300);
    image(nome,475,-75,400,300);
    textAlign(CENTER);
    textSize(26);
    textFont(fonte);

    startButton = createButton('Iniciar'.fontsize(60));
    startButton.position(620, 325);
    startButton.style('color:yellow')
    startButton.style('background-color:green')

    instButton = createButton('Instruções'.fontsize(60));
    instButton.position(620,400)
    instButton.style('color:yellow')
    instButton.style('background-color:green')

    credButton = createButton('Créditos'.fontsize(60));
    credButton.position(620, 475);
    credButton.style('color:yellow')
    credButton.style('background-color:green')

    startButton.mouseClicked(firstQuestion);
    instButton.mouseClicked(showInsts);
    credButton.mouseClicked(showCreds);
}

function firstQuestion() {

    clear()
    removeElements()

    background(201,161,131)

    fill('black')
    textSize(40)
    text('1. Esse assassinato serviu como estopim para você',450,100)  
    text('Liderar um golpe militar que impediria a posse do ',515,270)
    text('candidato eleito, Júlio Prestes, e garantiria a sua;',480,320)
    text('Se afastar da vida política, pois notou que esta ',479,400)
    text('é deveras perigosa',265,450)

    altA = createButton('');
    altA.position(50,250);
    altA.style('background-color:gray')
    altA.style('border-radius:50%')
    altA.size(50,50)

    altB = createButton('');
    altB.position(50,385);
    altB.style('background-color:gray')
    altB.style('border-radius:50%')
    altB.size(50,50)

    altA.mouseClicked(rightFirstAnswer);
    altB.mouseClicked(wrongFirstAnswer);
}

function showInsts() {
    
    clear()
    removeElements()

    background(201,161,131);
    fill(0);
    textSize(14);
    noStroke();
    textAlign(LEFT);
    textSize(30)
    text("Turma : 3a série A ", 20, 30, 260, 260)
    text("Esse jogo te coloca no centro dos conflitos políticos vividos no Brasil no final da década de 1920 e início da década de 1930. Você tem que pensar como e assumir o papel de Getúlio Vargas e conduzir o Brasil diante dos conturbados acontecimentos que surgem.", 20, 100,500,500)
    text("Material:BRAICK, Patrícia Ramos. História - das cavernas ao terceiro milênio, vol. 3, 2014.", 20, 400, 260, 260)

    createMenuButton()

}

function showCreds() {

    clear()
    removeElements()

    background(201,161,131);
    image(helton,100,100,300,350);
    image(leo,550,100,300,350)
    textSize(35)
    text("heltonluesly@ufrn. edu. com",200,550)
    text("Programador: Helton Luesly",195,500)
    textSize(30)
    text("RProf. Esp. Romário Leonardo S. da Silva",690,500)
    text("Professor de História da Rede Estadual - RN",680,540)
    textSize(35)
    text("rom.leonardo@hotmail.com",690,580)
    fill(0,0,0)

    createMenuButton()

}

/*
function firstAnswer(answer) {

    if (answer == 'right') {
        fill(0,255,0);
        textSize(35) 
        text('Correto! -> Excelente, é através desse golpe,chamado na época',480, 150);
        text('" de Revolução de 30” que você chega à presidência do Brasil"',450,200)
        removeElements()
    }
    else {
        fill(255,0,0)
        textSize(35)  
        text('ERRADO: Que pena, talvez você precise estudar ',450, 150);
        text('um pouco mais sobre “O movimento de 30” e o',440, 190);
        text('e o “Fim da política do café com leite',365, 230);
        removeElements()
    }

}
*/

function wrongFirstAnswer() {

    fill(255,0,0)
    textSize(35)  
    text('ERRADO: Que pena, talvez você precise estudar ',450, 150);
    text('um pouco mais sobre “O movimento de 30” e o',440, 190);
    text('e o “Fim da política do café com leite',365, 230);
    removeElements()

    createMenuButton()

}

function rightFirstAnswer() {

    fill(0,255,0);
    textSize(35) 
    text('Correto! -> Excelente, é através desse golpe,chamado na época',480, 150);
    text('" de Revolução de 30” que você chega à presidência do Brasil"',450,200)
    removeElements()

    createMenuButton()
}
