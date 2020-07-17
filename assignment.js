//feetToMile

function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}

//woodCalculator

function woodCalculator(chair,table,bed){
    var woodForChair= chair*1;
    var woodForTable =table*3;
    var woodForBed =bed*5;
    var totalwood =woodForChair+woodForTable+woodForBed;
    return totalwood;

}

//brickCalculator

function brickCalculator(level){
    
    if(level<=10){
        var totalBrick=1000*15*level;
        return totalBrick;
    }
    if(level>=11 && level<=20){
        var totalBrick=1000*15*10 + 1000*12*(level-10);
        return totalBrick;
    }
    if (level>=21){
        var totalBrick=1000*15*10+ 1000*12*10+ 1000*10*(level-20);
        return totalBrick; 
    }
}

//tinyFriend

function tinyFriend(friends) {
    var smallest = friends[0];
    for(var i = 0; i < friends.length; i++){
        var tempFriend = friends[i];
        if(tempFriend.length < smallest.length){
            smallest = tempFriend;
        }
    }
    console.log("Tiny Friend is: ", smallest);
}
