// setup and initialization
const options = [
  'POSITVE',
  'NEGATIVE',
 ' NEUTRAL'
]
let selected= 'NEGATIVE';

// Selectors
const optionsElement = document.getElementById('options');
const Content = document.getElementById("content")

// utilities and functions
 function render() {
   optionsElement.innerHTML= "";
   options.forEach(option => {
     optionsElement.innerHTML +=
     `<span class="option ${option=selected ? "selected": ""}" data-rating='${option}'>${option}</span>`
   });

   let ChangeCase=selected.toLowerCase();
   Content.innerText= ChangeCase.replace(ChangeCase[0], ChangeCase[0].toUpperCase() )  + ' Content'
 }

 render()

