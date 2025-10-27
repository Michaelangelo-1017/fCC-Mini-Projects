function burn(candlesToBurn){
    const leftoversFromBurn = candlesToBurn;
    return leftoversFromBurn;
}

function recycle(candles,leftoversNeeded){
    let newCandles1 = Math.trunc(candles / leftoversNeeded);
    let leftovers = candles % leftoversNeeded;
    
    const array = [newCandles1,leftovers];
    return array;
}

function resetLeftover(leftover){
    if(leftover > 0){
        return leftover
    }
    else{
        return 0
    }
}

function burnCandles(candles, leftoversNeeded) {
    let leftoverStore = 0;
    let isCandleRemaining = true;
    let totalCandles = candles;
    let count = 0;
    while(isCandleRemaining){
        count++;
        let leftover = resetLeftover(burn(candles)) + leftoverStore
        let theArray = recycle(leftover,leftoversNeeded);
        let newCandles = theArray[0];
        leftoverStore = theArray[1];
        candles = newCandles;
        totalCandles += candles; 
        
        console.log(`This is count ${count}`);
        console.log(`Candles : ${candles}`);
        console.log(`Leftover : ${leftover}`);
        console.log(`LeftoverStore : ${leftoverStore}`);
        console.log(`New candles : ${newCandles}`);
        console.log(`Total candles : ${totalCandles}`)
        console.log(`------------------------------------------------`);
        if(candles + leftoverStore < leftoversNeeded){
        isCandleRemaining = false;
        }
    }
    return totalCandles
}

const result = burnCandles(20,3);
console.log(result)