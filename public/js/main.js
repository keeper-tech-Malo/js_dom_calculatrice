
import {calculate} from "./function/fonction.js"
    // selectionne tous les button
    const buttons = document.querySelectorAll('button');

    // add eventListener sur chaque button
    buttons.forEach(function(button) {
    button.addEventListener('click', calculate);
    });
