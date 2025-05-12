// Roman numerals	Arabic numerals
// M	1000
// CM	900
// D	500
// CD	400
// C	100
// XC	90
// L	50
// XL	40
// X	10
// IX	9
// V	5
// IV	4
// I	1


const convertToRomanNumerals = (number) => {
    let numerals;
    if(!number)
        {
        return "Please enter a valid number";
    }

    else if(number < 0)
        {
        return "Please enter a number greater than or equal to 1";
    }

    else if(number >= 4000)
        {
        return "Please enter a number less than or equal to 3999";
    }

    else if (number >=1 && number <=3){
        numerals = [];

        for(let i = 1; i <= number; i++){
            numerals.push('I');
        }

        numerals = numerals.join('');
        return numerals;
    }

    else if(number == 4 || number == 5){
        if(number == 4){
            return 'IV';
        }

        else if(number == 5){
            return 'V'
        }
    }

    else if(number >= 6 && number <= 8){
        let det = 1;

        number = number - 5;
        let n = convertToRomanNumerals(number);
        return `V${n || ''}`;
        

    }

    else if(number == 9){
        return 'IX';
    }

    else if(number == 10){
        return 'X'
    }

    else if(number >= 11 && number <= 19){
        number = number - 10;
        let n = convertToRomanNumerals(number);
        return `X${n || ''}`;
    }

     else if(number >= 21 && number <= 29){
        number = number - 20;
        let n = convertToRomanNumerals(number);
        return `XX${n || ''}`;
    }

    else if(number >= 31 && number <= 39){
        number = number - 30;
        let n = convertToRomanNumerals(number);
        return `XXX${n || ''}`;
    }

    else if(number >= 41 && number <= 49){
        number = number - 40;
        let n = convertToRomanNumerals(number);
        return `XV${n || ''}`;
    }

    else if(number >= 51 && number <= 59){
        number = number - 50;
        let n = convertToRomanNumerals(number);
        return `L${n || ''}`;
    }

    else if(number >= 61 && number <= 69){
        number = number - 60;
        let n = convertToRomanNumerals(number);
        return `LX${n || ''}`;
    }

    else if(number >= 71 && number <= 79){
        number = number - 70;
        let n = convertToRomanNumerals(number);
        return `LX${n || ''}`;
    }

    else if(number >= 80 && number <= 89){
    number = number - 80;
    let n = convertToRomanNumerals(number);
    return `LXXX${n || ''}`;
}

else if(number >= 90 && number <= 99){
    number = number - 90;
    let n = convertToRomanNumerals(number);
    return `XC${n || ''}`;
}

else if(number >= 600 && number <= 699){
    number = number - 600;
    let n = convertToRomanNumerals(number);
    return `DC${n || ''}`;
}

else if(number >= 900 && number <= 999){
    number = number - 900;
    let n = convertToRomanNumerals(number);
    return `CM${n || ''}`;
}

else if(number == 1000){
    number = number - 1000;
    return `M`;
}

else if(number >= 1000 && number <= 1999){
    number = number - 1000;
    let n = convertToRomanNumerals(number);
    return `M${n}`;
}

else if(number >= 2000 && number <= 2999){
    number = number - 2000;
    let n = convertToRomanNumerals(number);
    return `MM${n || ''}`;
}

else if(number >= 3000 && number <= 3999){
    number = number - 3000;
    let n = convertToRomanNumerals(number);
    return `MMM${n || ''}`;
}

else{
    return '';
}




    

}

const number = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

output.innerHTML= JSON.parse(localStorage.getItem('data'))|| `<div class="bubble">Rice</div>`

convertBtn.onclick = () => {
    let convertNumber = Number(number.value);
    const myNumber = convertToRomanNumerals(convertNumber);


    if(!convertNumber){
        return;
    }
    else
    {
        output.innerHTML += `<div class="bubble">${convertNumber}</div>`

    setTimeout(() => {
        output.innerHTML += `<div class="bubble">${myNumber}</div>`;
    },1000)
    number.value = ''
    }

    localStorage.setItem('data', JSON.stringify(output.innerHTML));
   
}

// localStorage.removeItem('data')