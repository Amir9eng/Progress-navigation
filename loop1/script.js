// setup and initialization
const options = [
  'positive',
  'negative',
 'neutral'
]
let selected= 'negative';

// Selectors
const optionsElement = document.getElementById('options');
const ContentElement = document.getElementById("content")
const formElement = document.getElementById('form')
const indexElement = document.getElementById('index')

// utilities and functions
 function render() {
   optionsElement.innerHTML= "";
   options.forEach(option => {
     optionsElement.innerHTML +=
     `<span class="option ${option==selected ? "selected": ""}" data-rating='${option}'>${option}</span>`
   });

   ContentElement.innerText = `${selected} content`
 }

 render()

 // Triggers
optionsElement.addEventListener('click', (e) => {
  selected = e.target.dataset.rating
  render()
})
  
formElement.addEventListener('submit', e => {
  e.preventDefault()

  const input = indexElement.value
  if (input < 1 || input > 3) {
    alert('invalid index!')
    return
  }

  selected = options[input - 1]
  indexElement.value = ''
  render()
})