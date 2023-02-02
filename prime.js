function isprime(userInput){
    if(userInput == 1){
        return false;
    }
    if(userInput == 2)
    {
        return true;
    }
    var nsqrt = Math.sqrt(userInput);
    for(i = 2;1<nsqrt; i++){
        var mod = userInput %i;
        if (mod ==0){
            return false;
        }
    }
}