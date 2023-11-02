function sponge(stringa){
    //maak resultaat variabel lege string = ""
    //let gemoktestring = sponge("Ik heb een beker water");
    let resultaat =""


    //for loop over stringa (dus voor elke letter)
    for (let index = 0; index < stringa.length; index++) {
    const letter = stringa[index];

    let randomgetal = Math.random();

    if(randomgetal <0.5){
       resultaat+= letter .toUpperCase()
    }else
    resultaat+= letter .toLowerCase() 
}

return resultaat
    }


        //random getal 0-1 en als if > 0.5 uppercase
        //voeg de letter stringa[i] toe aan resultaat, soms met uppercase





//IK heB Een BeKeR WATer
console.log(sponge("hello world"));
//deze les heb ik met Abdul,Damian en meester gemaakt!!!