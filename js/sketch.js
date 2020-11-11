// variaveis 
var tela = 1;
var largura = 355;
var altura = 60;
var xMenu =500;
var yMenu1 = 325;
var yMenu2 = 400;
var yMenu3 = 475;
var  d =0,c=1;


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
  jogo();
  informacoes();
  voltar();
  creditos();

  } 

function menu(){
  //Tela de Menu
  if (tela == 1){
    background(logo)
    background(fundo)
    image(logo,530,75,300,300);
    image(nome,475,-75,400,300); 
    
    //Iniciar Jogo
    textAlign(CENTER);
    textSize(26);
    
    //Inicia1
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){ 
      stroke(0);
      noFill();
      rect(xMenu, yMenu1, largura, altura, 30);
      if(mouseIsPressed){
        tela = 2;
      }
    }
    
    textSize(60)
    textFont(fonte)
    fill(255,255,0);
    noStroke(0);
    text("Iniciar",685,370);
    
    //Informações do jogo
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura ){ 
      stroke(0);
      noFill();
      rect(xMenu, yMenu2, largura, altura, 30);
      if(mouseIsPressed){
        tela = 3;
      }
    } 
    
    textSize(60)
    fill(255,255,0);
    noStroke(0);
    text("Instruções", 685, 445);
    
    //créditos
   if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){ 
      stroke(0);
      noFill();
      rect(xMenu, yMenu3, largura, altura, 30);
      if(mouseIsPressed){
        tela = 4;
      }
    }
    
    textSize(60)
    textFont(fonte)
    fill(255,255,0);
    noStroke(0);
    text("Créditos", 685, 520);
    
    
  }
}
var apertouV = false;
var apertouF = false;
function jogo(){
 //Jogo em ação
  if (tela == 2){
    background(220);
    
    
    switch(c){
      case (1):
        textSize(40)
        
        text('1. Esse assassianto serviu como estopim para você',450,100)
        textSize(40)    
        
        text(' Liderar um golpe militar que impediria a posse do ',515,270)
        text(' candidato eleito, Júlio Prestes, e garantiria a sua;',480,320)
        text('se afastar da vida política, pois notou que esta ',479,400)
        text('é deveras perigosa',265,450)
        text("ESC, para voltar",800,580)
        noFill();
        rect(50, 250, 50, 50 , 30);
        
         stroke(0);
      if (mouseX > 50 && mouseX < 50 + 50 && mouseY > 250 && mouseY < 250 + 50){ 
        noFill();
        rect(50, 250, 50, 50 , 30);
      if(mouseIsPressed){
        fill(0,255,0);
        rect(50, 250, 50, 50, 30);
        apertouV = true;
        } 
       
      }
         if(apertouV == true){
           fill(0,255,0);
            textSize(35)   
          text('Correto! -> Excelente, é através desse golpe,chamado na época',450, 150);
           text('" de Revolução de 30” que você chega à presidência do Brasil"',450,200)
        setTimeout(() => {  (c = c + 1 ); }, 1000);
          
        }
        
        noFill();
        rect(50, 400, 50, 50 , 30);
        if (mouseX > 50 && mouseX < 50 + 50 && mouseY > 400 && mouseY < 400 + 50){ 
        stroke(0);
        noFill();
        rect(50, 400, 50, 50 , 30);
      if(mouseIsPressed){
        fill(255,0,0);
        rect(50, 400, 50, 50, 30);
        apertouF = true;
               
        } 
      }
        if(apertouF == true){
          fill(255,0,0)
          textSize(35)  
           text('ERRADO: Que pena, talvez você precise estudar ',450, 150);
          text('um pouco mais sobre “O movimento de 30” e o',440, 190);
          text('e o “Fim da política do café com leite',365, 230);
      (setTimeout(() => {  tela = 1; }, 1000));
           
           }  
                noFill();
        rect(50, 400, 50, 50 , 30);
        if (mouseX > 50 && mouseX < 50 + 50 && mouseY > 400 && mouseY < 400 + 50){ 
        stroke(0);
        noFill();
        rect(50, 400, 50, 50 , 30);
      if(mouseIsPressed){
        fill(255,0,0);
        rect(50, 400, 50, 50, 30);
        apertouF = true;
               
        } }
    
       break
       
      case (c):
         textSize(40)
        
        text('1. Esse assassianto serviu como estopim para você',450,100)
        textSize(40)    
        
        text(' Liderar um golpe militar que impediria a posse do ',515,270)
        text(' candidato eleito, Júlio Prestes, e garantiria a sua;',480,320)
        text('se afastar da vida política, pois notou que esta ',479,400)
        text('é deveras perigosa',265,450)
        text("ESC, para voltar",800,580)
        noFill();
        rect(50, 250, 50, 50 , 30);
        
        stroke(0);
      if (mouseX > 50 && mouseX < 50 + 50 && mouseY > 250 && mouseY < 250 + 50){ 
        noFill();
        rect(50, 250, 50, 50 , 30);
      if(mouseIsPressed){
        fill(0,255,0);
        rect(50, 250, 50, 50, 30);
        apertouV = true;
        } 
       
      }
         if(apertouV == true){
           fill(0,255,0);
            textSize(35)   
          text('Correto! -> Excelente, é através desse golpe,chamado na época',450, 150);
           text('" de Revolução de 30” que você chega à presidência do Brasil"',450,200)
        setTimeout(() => {  c = c+1; }, 10000);
        }
        
        noFill();
        rect(50, 400, 50, 50 , 30);
        if (mouseX > 50 && mouseX < 50 + 50 && mouseY > 400 && mouseY < 400 + 50){ 
        stroke(0);
        noFill();
        rect(50, 400, 50, 50 , 30);
      if(mouseIsPressed){
        fill(255,0,0);
        rect(50, 400, 50, 50, 30);
        apertouF = true;
               
        } 
      }
        if(apertouF == true){
          fill(255,0,0)
          textSize(35)  
           text('ERRADO: Que pena, talvez você precise estudar ',450, 150);
          text('um pouco mais sobre “O movimento de 30” e o',440, 190);
          text('e o “Fim da política do café com leite',365, 230);
        setTimeout(() => {  tela = 1; }, 10000);
           
           }  
                noFill();
        rect(50, 400, 50, 50 , 30);
        if (mouseX > 50 && mouseX < 50 + 50 && mouseY > 400 && mouseY < 400 + 50){ 
        stroke(0);
        noFill();
        rect(50, 400, 50, 50 , 30);
      if(mouseIsPressed){
        fill(255,0,0);
        rect(50, 400, 50, 50, 30);
        apertouF = true;
               
        } } 
        break;
        
      case (3):
        
        break;
        
      case (4):
        
        break;
        
      case (5):
        
        break;
        
        default:
          
    } 
  } 
}

function informacoes(){
   //Informações sobre o jogo
 if (tela == 3){
    background(201,161,131);
    fill(0);
    textSize(14);
    noStroke();
    textAlign(LEFT);
   textSize(30)
    text("Turma : 3a série A ", 20, 30, 260, 260)
   text("Esse jogo te coloca no centro dos conflitos políticos vividos no Brasil no final da década de 1920 e início da década de 1930. Você tem que pensar como e assumir o papel de Getúlio Vargas e conduzir o Brasil diante dos conturbados acontecimentos que surgem.", 20, 100,500,500)
   text("Material:BRAICK, Patrícia Ramos. História - das cavernas ao terceiro milênio, vol. 3, 2014.", 20, 400, 260, 260)
   text("ESC, para voltar",750,580);
  }
}

function voltar (){ 
 
  //voltar para a tela de inicio;
  if(keyIsDown(ESCAPE)){
    tela = 1;
  
}}

function creditos(){ 
  if(tela == 4){
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
    text("ESC, para voltar",820,50)
    
  }
}



  
  

