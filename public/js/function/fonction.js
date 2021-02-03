
// calculate fonction
export function calculate(event) {
// 
const clickedButtonValue = event.target.value;
// selectionne le input ecran
const ecran = document.querySelector('.ecran');

if (clickedButtonValue === '=') {
    // egarde si l'ecran n'est pas vide et seulement la il entame le calcul
    if (ecran.value !== '') {
    // calcule et montre la reponse
    ecran.value = eval(ecran.value);
    }
} else if (clickedButtonValue === 'C') {
    // nettoie tous du display
    ecran.value = '';
} else {
    // si non il le conconcate sur l'ecran
    ecran.value += clickedButtonValue;
}
}
