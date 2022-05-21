const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinAverage = calcAverage(85, 54, 41);
const koalaAverage = calcAverage(23, 34, 27);

function checkWinner(dolphinAverage, koalaAverage){
    console.log(dolphinAverage);
    console.log(koalaAverage)

    if(koalaAverage > dolphinAverage * 2){
        console.log(koalaAverage);
    }

    else if(dolphinAverage > koalaAverage * 2){
        console.log(`Dolphins win \{${dolphinAverage} vs ${koalaAverage}\}`)
    }

    else{
        console.log('No team wins!');
    }


}

checkWinner(dolphinAverage, koalaAverage);