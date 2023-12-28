const div_numero = document.querySelector('.numero')
const boton_mas = document.querySelector('.mas')
const boton_menos = document.querySelector('.menos')
const boton_reset = document.querySelector('.reset')
let valor_antiguo = localStorage.getItem('valor')
if (valor_antiguo) {
  div_numero.innerHTML = valor_antiguo
}

boton_mas.addEventListener('click', () => {
  let valor = parseInt(div_numero.innerHTML) + 1
  div_numero.innerHTML = valor
  localStorage.setItem('valor', valor)
})

boton_menos.addEventListener('click', () => {
  let valor = parseInt(div_numero.innerHTML) - 1
  div_numero.innerHTML = valor
  localStorage.setItem('valor', valor)
})

boton_reset.addEventListener('click', () => {
  div_numero.innerHTML = 0
  localStorage.setItem('valor', 0)
})
