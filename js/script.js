const boxContainer = document.querySelector('.box-container');

// se il contenitore % 3 = 0 e !=0 allora è multiplo di 3 > aggiungo box-3
// se il contenitore % 5 = 0 e !=0 allora è multiplo di 5 > aggiungo box-5
// ALTRIMENTI se il contenitore % 3 && % 5 = 0 e !=0 allora è multiplo di entrambi > aggiungo box-ex

for (let i = 0; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i !== 0) {
        // divisibile per 3
        boxContainer.innerHTML += `<div class="box box-3">fizzbuzz</div>`  
    }
    else if (i % 3 === 0 && i !== 0) {
        // divisibile per 5
        boxContainer.innerHTML += `<div class="box box-5">buzz</div>` 
    }  
    else if (i % 5 === 0 && i !== 0) {
        // divisibile per entrambi
        boxContainer.innerHTML += `<div class="box box-ex text_gray">fizz</div>`
    } else {
        boxContainer.innerHTML += `<div class="box">${i}</div>`
    }

}