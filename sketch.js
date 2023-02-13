var player, lowerWall, upperWall, leftWallup, rightWallup, leftWalldown, rightWalldown;

var horizontalLeft1, horizontalLeft2, horizontalLeft3, horizontalLeft4, horizontalLeft5,
horizontalLeft6, horizontalLeft7, horizontalLeft8, horizontalLeft9;
var horizontalRight1,horizontalRight2, horizontalRight3, horizontalRight4, horizontalRight5,
horizontalRight6, horizontalRight7, horizontalRight8, horizontalRight9;

var verticalLeft1, verticalLeft2, verticalLeft3, verticalLeft4;
var verticalRight1, verticalRight2, verticalRight3, verticalRight4;

var upperMiddle1, upperMiddle2, upperMiddle3, upperMiddle4, upperMiddle5, upperMiddle6, upperMiddle7;

var squareLeft1, squareLeft2;
var squareRight1, squareRight2;

var wallsGroup, badGroup;
 var   Pac_ManAnimation

//variables de cosas malas
var badThing1, badThing2, badThing3, badThing4, badThing5, badThing6;
var bad1Img, bad2Img, bad3Img, bad4Img, bad5Img, bad6Img;
var bads;
//Variables de tesoros
var treasure1, treasure2, treasure3, treasure4;
var treas1Img, treas2Img, treas3Img, treas4Img;

var playerImg;
var lifeImg, life1, life2, life3;

//Puntos y vidas
var life=3;
var points=0;

//Estado del juego
gameState="PLAY";

//Grupo
var treasureGroup;

function preload(){
//Pac_ManAnimation = loadAnimation("ELEMENTOS JUEGO PAC-MAN/Pac-man")

}

function setup() {
  createCanvas(600, 400);

//Sprite del jugador
Pac_Man = createSprite(random, 200, 10, 10);
//sprites frutas
naranjas = createSprite(279,135,20,20)
bananas = createSprite(310,135,20,20)
fresas = createSprite(335,135,20,20)
cereza = createSprite(360,135,20,20)

//sprites fantasmas 

fantasma_rosa = createSprite(258,204,15,15)
fantasma_rosa.shapeColor="red"
fantasma_naranja = createSprite(285,204,15,15)
fantasma_naranja.shapeColor="red"
fantasma_rojo= createSprite(310,204,15,15)
fantasma_rojo.shapeColor="red"
fantasma_azul = createSprite(335,204,15,15)
fantasma_azul.shapeColor="red"

//sprites galletas cambio de modo 
galleta_de_poder_esquina_inferior_isquierda = createSprite(20,382,15,15)
galleta_de_poder_esquina_inferior_isquierda. shapeColor = "yellow"
galleta_de_poder_esquina_superior_isquierda = createSprite(20,23,15,15)
galleta_de_poder_esquina_superior_isquierda. shapeColor = "yellow"
galleta_de_poder_esquina_superior_derecha = createSprite(570,23,15,15)
galleta_de_poder_esquina_superior_derecha. shapeColor = "yellow"
galleta_de_poder_esquina_inferior_derecha = createSprite(580,382,15,15)
galleta_de_poder_esquina_inferior_derecha. shapeColor = "yellow"


//Límites del juego superior e inferior
  lowerWall= createSprite(300,395,1200,10);
  lowerWall.shapeColor="blue";
  upperWall= createSprite(550,5,1200,10);
  upperWall.shapeColor="blue";

//Límites extremo izquierdo 
  leftWallup= createSprite(5,72,10,122);
  leftWallup.shapeColor="blue";
  leftWalldown= createSprite(5,322,10,132);
  leftWalldown.shapeColor="blue";

//Límites extremo derecho
  rightWallup= createSprite(595,72,10,122);
  rightWallup.shapeColor="blue";
  rightWalldown= createSprite(595,322,10,132);
  rightWalldown.shapeColor="blue";
  
// Paredes horizontales izquierdas
  horizontalLeft1 = createSprite(75,157,150,45); 
  horizontalLeft1.shapeColor="blue";
  horizontalLeft2 = createSprite(75,233,150,45); 
  horizontalLeft2.shapeColor="blue";
  horizontalLeft3 = createSprite(200,40,120,20);
  horizontalLeft3.shapeColor="blue";
  horizontalLeft4 = createSprite(195,115,50,20);
  horizontalLeft4.shapeColor="blue";
  horizontalLeft5 = createSprite(270,150,40,20);
  horizontalLeft5.shapeColor="blue";
  horizontalLeft6 = createSprite(63,290,30,25);
  horizontalLeft6.shapeColor="blue";
  horizontalLeft7 = createSprite(117,325,30,25);
  horizontalLeft7.shapeColor="blue";
  horizontalLeft8 = createSprite(210,295,100,20);
  horizontalLeft8.shapeColor="blue";
  horizontalLeft9 = createSprite(150,375,230,25);
  horizontalLeft9.shapeColor= "blue"  ;

//Paredes horizontales Derechas
  horizontalRight1 = createSprite(525,157,150,45); 
  horizontalRight1.shapeColor="blue";
  horizontalRight2 = createSprite(525,233,150,45); 
  horizontalRight2.shapeColor="blue";
  horizontalRight3 = createSprite(400,40,120,20);
  horizontalRight3.shapeColor="blue";
  horizontalRight4 = createSprite(410,115,50,20);
  horizontalRight4.shapeColor="blue";
  horizontalRight5 = createSprite(330,150,40,20);
  horizontalRight5.shapeColor="blue";
  horizontalRight6 = createSprite(535,290,30,25);
  horizontalRight6.shapeColor="blue";
  horizontalRight7 = createSprite(481,325,30,25);
  horizontalRight7.shapeColor="blue";
  horizontalRight8 = createSprite(390,295,100,20);
  horizontalRight8.shapeColor="blue";
  horizontalRight9 = createSprite(450,375,230,25);
  horizontalRight9.shapeColor="blue";

//Paredes verticales izquierdas
  verticalLeft1 = createSprite(190,200,20,90);
  verticalLeft1.shapeColor="blue";
  verticalLeft2 = createSprite(240,200,20,120);
  verticalLeft2.shapeColor="blue";
  verticalLeft3 = createSprite(90,307,25,60);
  verticalLeft3.shapeColor="blue";
  verticalLeft4 = createSprite(180,348,25,30);
  verticalLeft4.shapeColor="blue";

//Paredes verticales derechas
  verticalRight1 = createSprite(410,200,20,90);
  verticalRight1.shapeColor="blue";
  verticalRight2 = createSprite(360,200,20,120);
  verticalRight2.shapeColor="blue";
  verticalRight3 = createSprite(508,307,25,60);
  verticalRight3.shapeColor="blue";
  verticalRight4 = createSprite(420,348,25,30);
  verticalRight4.shapeColor="blue";
  
//Sprites medios
  upperMiddle1 = createSprite(300,32,20,45);
  upperMiddle1.shapeColor="blue";
  upperMiddle2 = createSprite(300,85,120,20);
  upperMiddle2.shapeColor="blue";
  upperMiddle3 = createSprite(300,105,20,20);
  upperMiddle3.shapeColor="blue";
  upperMiddle4 = createSprite(300,250,100,20);
  upperMiddle4.shapeColor="blue";
  upperMiddle5 = createSprite(300,282,20,45);
  upperMiddle5.shapeColor="blue";
  upperMiddle6 = createSprite(300,335,70,20);
  upperMiddle6.shapeColor="blue";
  upperMiddle7 = createSprite(300,360,20,30);
  upperMiddle7.shapeColor="blue";
  
//Sprites cuadros izquierda
  squareLeft1 = createSprite(75,73,80,80);
  squareLeft1.shapeColor="blue";
  squareLeft2 = createSprite(165,65,50,30);
  squareLeft2.shapeColor="blue";

//Sprites cuadrados derecha
  squareRight1 = createSprite(525,73,80,80);
  squareRight1.shapeColor="blue";
  squareRight2 = createSprite(435,65,50,30);
  squareRight2.shapeColor="blue";


//Creación de grupo wall
  wallsGroup = createGroup();

//Agrupar los elementos
  wallsGroup.add(lowerWall);
  wallsGroup.add(upperWall);
  wallsGroup.add(leftWallup);
  wallsGroup.add(rightWallup);
  wallsGroup.add(leftWalldown);
  wallsGroup.add(rightWalldown);
  wallsGroup.add(horizontalLeft1);
  wallsGroup.add(horizontalLeft2);
  wallsGroup.add(horizontalLeft3);
  wallsGroup.add(horizontalLeft4);
  wallsGroup.add(horizontalLeft5);
  wallsGroup.add(horizontalLeft6);
  wallsGroup.add(horizontalLeft7);
  wallsGroup.add(horizontalLeft8);
  wallsGroup.add(horizontalLeft9);
  wallsGroup.add(horizontalRight1);
  wallsGroup.add(horizontalRight2);
  wallsGroup.add(horizontalRight3);
  wallsGroup.add(horizontalRight4);
  wallsGroup.add(horizontalRight5);
  wallsGroup.add(horizontalRight6);
  wallsGroup.add(horizontalRight7);
  wallsGroup.add(horizontalRight8);
  wallsGroup.add(horizontalRight9);
  wallsGroup.add(verticalLeft1);
  wallsGroup.add(verticalLeft2);
  wallsGroup.add(verticalLeft3);
  wallsGroup.add(verticalLeft4);
  wallsGroup.add(verticalRight1);
  wallsGroup.add(verticalRight2);
  wallsGroup.add(verticalRight3);
  wallsGroup.add(verticalRight4);
  wallsGroup.add(upperMiddle1);
  wallsGroup.add(upperMiddle2);
  wallsGroup.add(upperMiddle3);
  wallsGroup.add(upperMiddle4);
  wallsGroup.add(upperMiddle5);
  wallsGroup.add(upperMiddle6);
  wallsGroup.add(upperMiddle7);
  wallsGroup.add(squareLeft1);
  wallsGroup.add(squareLeft2);
  wallsGroup.add(squareRight1);
  wallsGroup.add(squareRight2);
  //pacman
  Pac_Man.x=Math.round(random(50,550))
  Pac_Man.y=Math.round(random(50,350))
  //fantasma rojo 
  fantasma_rojo.velocityX=Math.round(random(-5,5))
  fantasma_rojo.velocityY=Math.round(random(-5,5))
  //fantasma naranja
  fantasma_naranja.velocityX=Math.round(random(-5,5))
  fantasma_naranja.velocityY=Math.round(random(-5,5))
  //fantasma azul 
  fantasma_azul.velocityX=Math.round(random(-5,5))               
  fantasma_azul.velocityY=Math.round(random(-5,5))
  // fantasma rosa
  fantasma_rosa.velocityX=Math.round(random(-5,5))
  fantasma_rosa.velocityY=Math.round(random(-5,5))
}


function draw() {
  background("black");
  text(mouseX+","+mouseY, mouseX, mouseY)
  Pac_Man.collide(wallsGroup)
  if(keyDown(RIGHT_ARROW)){
   Pac_Man.x+=5

  }
  if(keyDown(LEFT_ARROW)){
    Pac_Man.x-=5

  }
  if(keyDown(UP_ARROW)){
    Pac_Man.y-=5

  }
  if(keyDown(DOWN_ARROW)){
    Pac_Man.y+=5

  }
  if ( Pac_Man.x>550 &&Pac_Man.y>180 &&Pac_Man.y<220){
    Pac_Man.x=100
    Pac_Man.y=200
   }


  if ( Pac_Man.x<50 &&Pac_Man.y>180 &&Pac_Man.y<220){
   Pac_Man.x=500
   Pac_Man.y=200
  }


      //fantasma rojo 
      if ( fantasma_rojo.x>550 &&fantasma_rojo.y>180 &&fantasma_rojo.y<220){
        fantasma_rojo.x=100
       fantasma_rojo.y=200
       }
    
    
      if ( fantasma_rojo.x<50 &&fantasma_rojo.y>180 &&Pac_Man.y<220){
       fantasma_rojo.x=500
       fantasma_rojo.y=200
      }
      //fantasma naranja 
      if ( fantasma_naranja.x>550 &&fantasma_naranja.y>180 &&fantasma_naranja.y<220){
       fantasma_naranja.x=100
        fantasma_naranja.y=200
       }
    
    
      if (fantasma_naranja.x<50 &fantasma_naranja.y>180 &&fantasma_naranja.y<220){
     fantasma_naranja.x=500
       fantasma_naranja.y=200
      }
      //fantasma azul 

      if ( fantasma_azul.x>550 &&fantasma_azul.y>180 &&fantasma_azul.y<220){
        fantasma_azul.x=100
       fantasma_azul.y=200
       }
    
    
      if ( fantasma_azul.x<50 &&fantasma_azul.y>180 &&fantasma_azul.y<220){
       fantasma_azul.x=500
      fantasma_azul.y=200
      }
      // fantasma rosa

      if (fantasma_rosa.x>550 &&fantasma_rosa.y>180 &&fantasma_rosa.y<220){
        fantasma_rosa.x=100
        fantasma_rosa.y=200
       }
    
    
      if ( fantasma_rosa.x<50 &&fantasma_rosa.y>180 &&fantasma_rosa.y<220){
      fantasma_rosa.x=500
       fantasma_rosa.y=200
      }

     text("Vidas =" + life,55,25 )
     //fantasma rojo

       if(fantasma_rojo.isTouching(Pac_Man)){

       life-=1
       Pac_Man.x=Math.round(random(60,540))
       Pac_Man.y=200
       }
       //fantasma naranja
       if(fantasma_naranja.isTouching(Pac_Man)){

        life-=1
        Pac_Man.x=Math.round(random(60,540))
        Pac_Man.y=200
        }
        // fantasma azul
        if(fantasma_azul.isTouching(Pac_Man)){

          life-=1
          Pac_Man.x=Math.round(random(60,540))
          Pac_Man.y=200
          }
          //fantasma rosa

          if(fantasma_rosa.isTouching(Pac_Man)){

            life-=1
            Pac_Man.x=Math.round(random(60,540))
            Pac_Man.y=200
            }



      moverfantasma()
        

      
  drawSprites();
  
  
}

function moverfantasma(){
  if(frameCount%120==0){
    //fantasma rojo
  fantasma_rojo.velocityX=Math.round(random(-5,5))
  fantasma_rojo.velocityY=Math.round(random(-5,5))
  //fantasma naranja
  fantasma_naranja.velocityX=Math.round(random(-5,5))
  fantasma_naranja.velocityY=Math.round(random(-5,5))
  //fantasma azul 
  fantasma_azul.velocityX=Math.round(random(-5,5))
  fantasma_azul.velocityY=Math.round(random(-5,5))
  //fantasma rosa
  fantasma_rosa.velocityX=Math.round(random(-5,5))
  fantasma_rosa.velocityY=Math.round(random(-5,5))
  
}
fantasma_rojo.bounceOff(wallsGroup)
fantasma_naranja.bounceOff(wallsGroup)
fantasma_azul.bounceOff(wallsGroup)
fantasma_rosa.bounceOff(wallsGroup)
}