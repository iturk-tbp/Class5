var form,system,code,security,bg,bg2;
var score=0;

function preload(){
    mount = loadImage("mountain.png");
    desert = loadImage("desert.png");
    earth = loadImage("earth.png");
    plate = loadImage("plateau.png");
    plain = loadImage("plains.png");
    bg = loadImage("aladdin_cave.jpg");
    bg2 = loadImage("treasure.jpg");
    coin = loadImage("goldCoin.png");
}

function setup(){
    var canvas =  createCanvas(1000,790);
    prithvi = createSprite(600,600,200,200);
    prithvi.addImage("p",earth);
    prithvi.scale = 0.3;
    plat = createSprite(200,200,100,100);
    plat.addImage("plat",plate);
    plat.scale = 0.7;
    plat.visible = false;
    moun = createSprite(200,200,100,100);
    moun.addImage("moun",mount);
    moun.scale = 0.4;
    moun.visible = false;
    des = createSprite(200,200,100,100);
    des.addImage("de",desert);
    des.scale = 0.4;
    des.visible = false;
    gameState = 0;
    
}

function draw(){
    
    if(gameState === 0){
        
        background("black");
        prithvi.visible = true;
        fill("white");
        textSize(30);
        text("Hello! I am Prithvi. I am the third planet from the sun. On my surface exists a beautiful country called Bharat. Would you like to meet my friends in Bharat? Press P, and we will be able to meet them!",50,325,700,700);
        if(keyDown("P")){
            gameState = 1; 
            prithvi.visible = false;
        
        }
        
    }
    if(gameState === 1){
        background("black");
        plat.visible = true;
        fill("white");
        textSize(30);
        text("Hello! I am the Deccan Plateau. I live in Maharashtra, Karnataka, Chattisgarh, Andhra Pradesh, etc. I am older than the mountains, and have black soil, which is good for growing cotton. Press K to play a game now, or else press M to meet my other friends.",400,100,300,700);
        if(keyDown("M")){
            gameState = 2; 
            plat.visible = false;
        
        }
        if(keyDown("K")){
            gameState = 3; 
            plat.visible = false;
        
        }
    }
    if(gameState === 2){
        background("black");
        moun.visible = true;
        fill("white");
        textSize(30);
        text("Hello! I am Mr. Mountain. I am found in the Union territories of Jammu and Kashmir, and the states of Himachal Pradesh, Punjab, Arunachal Pradesh, Sikkim, Uttrakhand, etc. I give rise to many, many rivers from my glaciers, who are BIG BLOCKS of ICE.Press K to play a game now, or else press D to meet my other friends.",400,100,300,700);
        if(keyDown("D")){
            gameState = 3; 
            moun.visible = false;
        
        }
        if(keyDown("K")){
            gameState = 4; 
            moun.visible = false;
        
        }
    }
    if(gameState === 3){
        background("black");
        des.visible = true;
        fill("white");
        textSize(30);
        text("Hello! I am the Thar desert. I am found in the mainly in the state of Rajasthan, but some parts of me are found in Gujarat, Punjab and Madhya Pradesh too. I contain many forts, as well as many different animals. Do visit me! Press K to play a game now, or else press E to go back to the earth.",400,100,300,700);
        if(keyDown("E")){
            gameState = 0; 
            des.visible = false;
        
        }
        if(keyDown("K")){
            gameState = 4; 
            des.visible = false;
            security = new Security();
            system = new System()
        
        }
    }
    if(gameState === 4){

        background("black");
        clues();
        security.display();
        textSize(20);
        fill("white");
        text("Score: " + score, 250, 50);
        text("Answer the questions to win a gift!",100,100)

        if(score === 5) {
        clear();
        background("black")
        fill("white")
        textSize(40);
        text("Congratulations!!",225, 200);
        text("You get a coin",225, 300);
        text("Press space to return!",225, 600);
        image(coin,500,400,40,40);
        }
        
        if(keyDown("space")){
            gameState = 0;
            score = 0;
        }

    }
    drawSprites();
}