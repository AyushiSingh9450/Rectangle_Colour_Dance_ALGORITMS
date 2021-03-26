//added the parameters
function isTouching(object1, object2){
    if(object2.y - object1.y < object1.height/2 + object2,height/2 &&
     object1.x - object2.x < object1.width/2 + object2.width/2 &&
     object1.y - object2.y < object1.height/2 + object2.height/2 &&
     object2.x - object1.x < object1.width/2 + object2.width/2){
     object1.shapeColor = object2.shapeColor;
         }
}

//added the parameters
function bounceOff(object1, object2){
    if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
        object2.x - object1.x < object1.width/2 + object2.width/2){
            object1.velocityX =  onject1.velocityX * (-1);
    }

    if(object1.y - object2.y < object1.height/2 + object2.height/2 &&
        object2.y - object1.y < object1.height/2 + object2.height2/2){
        
            object1.velocityY = object1.velocityY * (-1);
    }
    

}
